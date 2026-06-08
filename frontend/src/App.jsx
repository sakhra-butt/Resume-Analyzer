import { useState } from 'react'
import UploadForm from './components/UploadForm'
import ResultCard from './components/ResultCard'

export default function App() {
  const [result, setResult] = useState(null)

  const scrollToAnalyzer = () => {
    document.getElementById('analyzer').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              RA
            </div>
            <span className="text-lg font-bold text-gray-900">
              Resume<span className="text-blue-600">Analyzer</span>
            </span>
          </div>
          <button
            onClick={scrollToAnalyzer}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Analyze Now →
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-100 mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            AI-powered resume analyzer
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Get hired faster with{' '}
            <span className="text-blue-600">smarter resume feedback</span>
          </h1>
          <p className="text-gray-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Upload your resume and a job description. Our AI analyzes the match,
            highlights your strengths, and tells you exactly what's missing.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <button
              onClick={scrollToAnalyzer}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Analyze my resume
            </button>
            <a
              href="https://github.com/sakhra-butt/resume-analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold px-6 py-3 rounded-lg border border-gray-200 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-10 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-xs text-gray-400 mt-1">Avg. match score</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">&lt;10s</div>
              <div className="text-xs text-gray-400 mt-1">Analysis time</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">Free</div>
              <div className="text-xs text-gray-400 mt-1">No sign-up needed</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-sm font-semibold text-gray-500 mb-8">
            How it works
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                ),
                title: 'Upload your resume',
                desc: 'Drop your PDF resume into the analyzer below.',
              },
              {
                step: '02',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Paste job description',
                desc: 'Add the full job posting you\'re targeting.',
              },
              {
                step: '03',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Get your score',
                desc: 'See your match score, strengths, and gaps.',
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="bg-white rounded-xl border border-gray-100 p-5 flex gap-4 items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-400 mb-1">Step {step}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-1">{title}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              'Keyword match analysis',
              'Missing skills detection',
              'ATS-friendly tips',
              'Instant results',
              'No account needed',
            ].map((feat) => (
              <span key={feat} className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-500 text-xs px-4 py-1.5 rounded-full">
                <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {feat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main — untouched */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        <div id="analyzer" className="space-y-5">
          <UploadForm onResult={(data) => setResult(data)} />
          {result && <ResultCard result={result} />}
        </div>
      </main>

    </div>
  )
}
