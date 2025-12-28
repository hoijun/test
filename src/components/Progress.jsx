function Progress({ current, total }) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          질문 {current} / {total}
        </span>
        <span className="text-sm font-medium text-purple-600">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default Progress
