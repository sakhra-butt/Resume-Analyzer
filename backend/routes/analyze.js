const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const Groq = require('groq-sdk');

const upload = multer({ dest: 'uploads/' });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'No resume file uploaded' });
    }
    if (!jobDescription) {
      return res.status(400).json({ error: 'Job description is required' });
    }

    // Extract text from PDF
    const pdfBuffer = fs.readFileSync(req.file.path);
    const { text: resumeText } = await pdfParse(pdfBuffer);
    fs.unlinkSync(req.file.path);

    // Build prompt
    const prompt = `
      You are a professional resume reviewer and ATS expert.
      Analyze this resume against the job description below.

      RESUME:
      ${resumeText}

      JOB DESCRIPTION:
      ${jobDescription}

      You MUST return ONLY a valid JSON object. No extra text before or after.
      Every value MUST be a proper JSON string wrapped in double quotes.
      
      Return exactly this structure:
      {
        "matchScore": 80,
        "summary": "Write your 2 sentence summary here as a proper string in double quotes.",
        "strengths": ["strength one", "strength two", "strength three"],
        "missing": ["missing one", "missing two", "missing three"],
        "improved_bullet": "Write the improved bullet point here as a proper string in double quotes."
      }

      RULES:
      - matchScore must be a number, no quotes
      - All other values must be strings in double quotes
      - strengths and missing must be arrays of exactly 3 strings
      - No trailing commas
      - No markdown, no code blocks, no explanation
      - ONLY the JSON object, nothing else
    `;

    // Call Groq
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
    });

    const rawText = completion.choices[0].message.content;
    console.log('AI RAW RESPONSE:', rawText);

    // Parse JSON
    let analysis;
    try {
      const cleaned = rawText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .trim();

      const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error('No JSON found');

      analysis = JSON.parse(jsonMatch[0]);
    } catch (parseError) {
      console.error('Parse error:', rawText);
      return res.status(500).json({ error: 'AI returned invalid format. Try again.' });
    }

    // Return result
    res.status(201).json({
      matchScore: analysis.matchScore,
      summary: analysis.summary,
      strengths: analysis.strengths,
      missing: analysis.missing,
      improved_bullet: analysis.improved_bullet
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;