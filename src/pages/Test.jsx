import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import Question from "../components/Question";
import Progress from "../components/Progress";

function Test() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selectedType) => {
    const newAnswers = [
      ...answers,
      {
        questionId: questions[currentIndex].id,
        selectedType,
      },
    ];
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 테스트 완료 - 결과 페이지로 이동
      navigate("/result", { state: { answers: newAnswers } });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <Progress current={currentIndex + 1} total={questions.length} />

        <Question question={questions[currentIndex]} onAnswer={handleAnswer} />

        {currentIndex > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handlePrevious}
              className="text-gray-600 hover:text-gray-800 font-medium px-6 py-2 rounded-lg hover:bg-white transition-all duration-200"
            >
              ← 이전 질문
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Test;
