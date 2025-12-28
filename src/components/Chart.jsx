import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

function Chart({ percentages }) {
  const data = [
    {
      name: 'E vs I',
      외향: percentages.EI.E,
      내향: percentages.EI.I
    },
    {
      name: 'S vs N',
      감각: percentages.SN.S,
      직관: percentages.SN.N
    },
    {
      name: 'T vs F',
      사고: percentages.TF.T,
      감정: percentages.TF.F
    },
    {
      name: 'J vs P',
      판단: percentages.JP.J,
      인식: percentages.JP.P
    }
  ]

  const COLORS = {
    외향: '#8b5cf6',
    내향: '#3b82f6',
    감각: '#8b5cf6',
    직관: '#3b82f6',
    사고: '#8b5cf6',
    감정: '#3b82f6',
    판단: '#8b5cf6',
    인식: '#3b82f6'
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        지표별 비율 분석
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          {Object.keys(COLORS).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={COLORS[key]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {/* 상세 비율 표시 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">외향 vs 내향</p>
          <p className="text-lg font-bold text-purple-600">
            E {percentages.EI.E}% : {percentages.EI.I}% I
          </p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">감각 vs 직관</p>
          <p className="text-lg font-bold text-blue-600">
            S {percentages.SN.S}% : {percentages.SN.N}% N
          </p>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">사고 vs 감정</p>
          <p className="text-lg font-bold text-purple-600">
            T {percentages.TF.T}% : {percentages.TF.F}% F
          </p>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">판단 vs 인식</p>
          <p className="text-lg font-bold text-blue-600">
            J {percentages.JP.J}% : {percentages.JP.P}% P
          </p>
        </div>
      </div>
    </div>
  )
}

export default Chart
