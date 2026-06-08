import { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function UploadForm({ onResult }) {
  const [file, setFile] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!file) return setError('Please upload your resume PDF')
    if (!jobDescription.trim()) return setError('Please paste a job description')

    const formData = new FormData()
    formData.append('resume', file)
    formData.append('jobDescription', jobDescription)

    try {
      setLoading(true)
      const res = await axios.post(`${API_URL}/api/analyze`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      onResult(res.data)
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
        Upload Your Resume
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        PDF format only. Paste the job description you are applying for.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume (PDF)
          </label>
          <div
            className={`border-2 border-dashed rounded-xl p-4 sm:p-6 text-center cursor-pointer transition-colors ${
              file
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <input
              id="fileInput"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file ? (
              <div>
                <p className="text-blue-600 font-medium text-sm">✓ {file.name}</p>
                <p className="text-gray-400 text-xs mt-1">Click to change file</p>
              </div>
            ) : (
              <div>
                <p className="text-2xl sm:text-3xl mb-2">📄</p>
                <p className="text-gray-600 text-sm font-medium">Click to upload PDF</p>
                <p className="text-gray-400 text-xs mt-1">Max 10MB</p>
              </div>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here..."
            rows={5}
            className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 rounded-xl transition-colors text-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Analyzing with AI...
            </span>
          ) : (
            'Analyze Resume'
          )}
        </button>

      </form>
    </div>
  )
}