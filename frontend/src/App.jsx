import { useState } from 'react'
import UploadForm from './components/UploadForm'
import ResultCard from './components/ResultCard'

export default function App() {
  const [result, setResult] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <h1 className="text-base sm:text-xl font-semibold text-gray-900">
            AI Resume Analyzer
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">AI-powered resume feedback</p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="space-y-5">
          <UploadForm onResult={(data) => setResult(data)} />
          {result && <ResultCard result={result} />}
        </div>
      </main>
    </div>
  )
}