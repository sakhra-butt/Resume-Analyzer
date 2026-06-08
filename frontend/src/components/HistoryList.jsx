import { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function HistoryList() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    axios.get(`${API_URL}/api/analyze/history`)
      .then(res => setHistory(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const scoreColor = (score) =>
    score >= 75 ? 'text-green-600 bg-green-50' :
    score >= 50 ? 'text-yellow-600 bg-yellow-50' :
    'text-red-500 bg-red-50'

  if (loading) {
    return (
      <div className="text-center py-16 text-gray-400 text-sm">
        Loading history...
      </div>
    )
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-3">📭</p>
        <p className="text-gray-500 text-sm">No analyses yet. Go analyze a resume!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Past Analyses</h2>

      {history.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl border border-gray-200 p-5 cursor-pointer hover:border-blue-300 transition-colors"
          onClick={() => setSelected(selected?._id === item._id ? null : item)}
        >
          {/* Row */}
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 truncate pr-4">
                {item.jobDescription.substring(0, 80)}...
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short', day: 'numeric', year: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                })}
              </p>
            </div>
            <div className={`px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ${scoreColor(item.matchScore)}`}>
              {item.matchScore}%
            </div>
          </div>

          {/* Expanded Detail */}
          {selected?._id === item._id && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Strengths</p>
                  <ul className="space-y-1">
                    {item.strengths.map((s, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-1">
                        <span className="text-green-500">✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-1">Missing</p>
                  <ul className="space-y-1">
                    {item.missing.map((m, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-1">
                        <span className="text-red-400">✗</span> {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg px-3 py-2">
                <p className="text-xs font-semibold text-gray-500 mb-1">Improved bullet</p>
                <p className="text-xs text-blue-800">{item.improved_bullet}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}