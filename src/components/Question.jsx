function Question({ question, onAnswer }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer.type)}
            className="w-full p-6 text-left rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-700 pr-4">
                {answer.text}
              </span>
              <span className="text-2xl text-purple-600 opacity-0 group-hover:opacity-100">
                →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Question
