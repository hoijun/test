import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/test");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
            MBTI 성격 테스트
          </h1>

          <p className="text-xl text-gray-700 mb-8">나는 어떤 유형일까?</p>

          <div className="mb-10 space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 text-2xl">✓</span>
              <p className="text-gray-600">
                총 <span className="font-bold text-purple-600">48개</span>의
                질문
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 text-2xl">✓</span>
              <p className="text-gray-600">
                소요 시간: 약{" "}
                <span className="font-bold text-purple-600">5-10분</span>
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 text-2xl">✓</span>
              <p className="text-gray-600">
                <span className="font-bold text-purple-600">
                  16가지 성격 유형
                </span>{" "}
                중 하나로 분석
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-purple-600 text-2xl">✓</span>
              <p className="text-gray-600">
                각 지표별{" "}
                <span className="font-bold text-purple-600">상세한 비율</span>과{" "}
                <span className="font-bold text-purple-600">차트</span> 제공
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              테스트 방법
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              각 질문에 대해{" "}
              <span className="font-semibold">평소 자신의 모습</span>과 가장
              가까운 답변을 선택해주세요.
              <br />
              정답은 없으며, <span className="font-semibold">
                솔직하게
              </span>{" "}
              답변할수록 정확한 결과를 얻을 수 있습니다.
            </p>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            테스트 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
