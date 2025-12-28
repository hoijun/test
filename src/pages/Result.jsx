import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { calculateResult } from '../utils/calculator'
import { mbtiTypes } from '../data/types'
import Chart from '../components/Chart'

function Result() {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!location.state?.answers) {
      navigate('/')
      return
    }

    const calculatedResult = calculateResult(location.state.answers)
    setResult(calculatedResult)
  }, [location, navigate])

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">결과를 계산하는 중...</div>
      </div>
    )
  }

  const typeInfo = mbtiTypes[result.type]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 결과 헤더 */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            당신의 MBTI는
          </h1>
          <div className="text-6xl md:text-7xl font-bold mb-4 tracking-wider">
            {result.type}
          </div>
          <p className="text-2xl md:text-3xl opacity-90">
            {typeInfo.title}
          </p>
        </div>

        {/* 차트 */}
        <Chart percentages={result.percentages} />

        {/* 성격 설명 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            성격 설명
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {typeInfo.description}
          </p>
        </div>

        {/* 특징 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            주요 특징
          </h2>
          <ul className="space-y-2">
            {typeInfo.characteristics.map((char, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl">•</span>
                <span className="text-gray-700">{char}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 강점과 약점 */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              강점
            </h2>
            <div className="flex flex-wrap gap-2">
              {typeInfo.strengths.map((strength, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              개선할 점
            </h2>
            <div className="flex flex-wrap gap-2">
              {typeInfo.weaknesses.map((weakness, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                >
                  {weakness}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            다시 테스트하기
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200"
          >
            결과 공유하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Result
