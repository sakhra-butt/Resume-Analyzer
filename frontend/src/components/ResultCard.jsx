export default function ResultCard({ result }) {
    const { matchScore, summary, strengths, missing, improved_bullet } = result
  
    const scoreColor =
      matchScore >= 75 ? 'text-green-600' :
      matchScore >= 50 ? 'text-yellow-600' :
      'text-red-500'
  
    const scoreBg =
      matchScore >= 75 ? 'bg-green-50 border-green-200' :
      matchScore >= 50 ? 'bg-yellow-50 border-yellow-200' :
      'bg-red-50 border-red-200'
  
    const scoreLabel =
      matchScore >= 75 ? 'Strong Match' :
      matchScore >= 50 ? 'Moderate Match' :
      'Weak Match'
  
    return (
      <div className="space-y-4">
  
        {/* Score */}
        <div className={`rounded-2xl border p-5 sm:p-6 text-center ${scoreBg}`}>
          <p className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Match Score</p>
          <p className={`text-5xl sm:text-6xl font-bold ${scoreColor}`}>{matchScore}%</p>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
            matchScore >= 75 ? 'bg-green-100 text-green-700' :
            matchScore >= 50 ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-600'
          }`}>
            {scoreLabel}
          </span>
          <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
            {summary}
          </p>
        </div>
  
        {/* Strengths + Missing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-green-500">✓</span> Your Strengths
            </h3>
            <ul className="space-y-2">
              {strengths.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-red-400">✗</span> Missing Keywords
            </h3>
            <ul className="space-y-2">
              {missing.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs flex items-center justify-center flex-shrink-0 font-medium">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Improved Bullet */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-gray-900 mb-1 flex items-center gap-2">
            <span>✏️</span> AI Rewrote Your Weakest Bullet Point
          </h3>
          <p className="text-xs text-gray-400 mb-3">Use this stronger version in your resume</p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
            <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">{improved_bullet}</p>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(improved_bullet)}
            className="mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium"
          >
            Copy to clipboard
          </button>
        </div>
  
      </div>
    )
  }