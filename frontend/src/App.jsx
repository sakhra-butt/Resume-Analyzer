import { useState } from 'react'
import UploadForm from './components/UploadForm'
import ResultCard from './components/ResultCard'
import HistoryList from './components/HistoryList'

export default function App() {
  const [result, setResult] = useState(null)
  const [activeTab, setActiveTab] = useState('analyze')

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-base sm:text-xl font-semibold text-gray-900">
              AI Resume Analyzer
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">AI-powered resume feedback</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('analyze')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'analyze'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Analyze
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              History
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {activeTab === 'analyze' ? (
          <div className="space-y-5">
            
            <UploadForm onResult={(data) => {
  setResult(data)
  const existing = JSON.parse(localStorage.getItem('resumeHistory') || '[]')
  const updated = [{ ...data, createdAt: new Date().toISOString() }, ...existing].slice(0, 10)
  localStorage.setItem('resumeHistory', JSON.stringify(updated))
}} />
            {result && <ResultCard result={result} />}
          </div>
        ) : (
          <HistoryList />
        )}
      </main>
    </div>
  )
}