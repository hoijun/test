// MBTI 테스트 질문 데이터
// type: E(외향)/I(내향), S(감각)/N(직관), T(사고)/F(감정), J(판단)/P(인식)
// 각 질문은 해당 타입에 +1점을 부여

export const questions = [
  // E/I (외향/내향) - 12개
  {
    id: 1,
    question: "모르는 사람들과의 모임에서 나는",
    answers: [
      { text: "먼저 말을 걸며 친해지려고 노력한다", type: "E" },
      { text: "다른 사람이 말을 걸어올 때까지 기다린다", type: "I" }
    ]
  },
  {
    id: 2,
    question: "주말에 나는",
    answers: [
      { text: "친구들을 만나거나 외출하는 것을 선호한다", type: "E" },
      { text: "집에서 혼자만의 시간을 보내는 것을 선호한다", type: "I" }
    ]
  },
  {
    id: 3,
    question: "사람들과 대화할 때 나는",
    answers: [
      { text: "활발하게 이야기하며 에너지를 얻는다", type: "E" },
      { text: "듣는 편이며 시간이 지날수록 피곤해진다", type: "I" }
    ]
  },
  {
    id: 4,
    question: "새로운 환경에서 나는",
    answers: [
      { text: "금방 적응하고 사람들과 어울린다", type: "E" },
      { text: "적응하는데 시간이 필요하다", type: "I" }
    ]
  },
  {
    id: 5,
    question: "친구 관계에서 나는",
    answers: [
      { text: "넓고 다양한 친구 관계를 유지한다", type: "E" },
      { text: "소수의 깊은 친구 관계를 유지한다", type: "I" }
    ]
  },
  {
    id: 6,
    question: "전화 통화는",
    answers: [
      { text: "편하고 자주 한다", type: "E" },
      { text: "부담스럽고 문자가 더 편하다", type: "I" }
    ]
  },
  {
    id: 7,
    question: "회의나 토론에서 나는",
    answers: [
      { text: "적극적으로 의견을 제시한다", type: "E" },
      { text: "생각을 정리한 후 신중하게 말한다", type: "I" }
    ]
  },
  {
    id: 8,
    question: "에너지를 충전하기 위해 나는",
    answers: [
      { text: "사람들과 만나고 활동한다", type: "E" },
      { text: "혼자만의 시간을 가진다", type: "I" }
    ]
  },
  {
    id: 9,
    question: "관심사를 공유할 때 나는",
    answers: [
      { text: "즉시 다른 사람들에게 이야기한다", type: "E" },
      { text: "혼자 충분히 즐긴 후 이야기한다", type: "I" }
    ]
  },
  {
    id: 10,
    question: "문제를 해결할 때 나는",
    answers: [
      { text: "사람들과 이야기하며 해결책을 찾는다", type: "E" },
      { text: "혼자 생각하며 해결책을 찾는다", type: "I" }
    ]
  },
  {
    id: 11,
    question: "파티나 모임 후에 나는",
    answers: [
      { text: "기분이 좋고 더 활기차진다", type: "E" },
      { text: "피곤하고 휴식이 필요하다", type: "I" }
    ]
  },
  {
    id: 12,
    question: "생각을 정리할 때 나는",
    answers: [
      { text: "말하면서 생각을 정리한다", type: "E" },
      { text: "머릿속으로 생각을 정리한다", type: "I" }
    ]
  },

  // S/N (감각/직관) - 12개
  {
    id: 13,
    question: "정보를 받아들일 때 나는",
    answers: [
      { text: "현재의 사실과 세부사항에 집중한다", type: "S" },
      { text: "미래의 가능성과 의미에 집중한다", type: "N" }
    ]
  },
  {
    id: 14,
    question: "일을 할 때 나는",
    answers: [
      { text: "실용적이고 현실적인 방법을 선호한다", type: "S" },
      { text: "창의적이고 새로운 방법을 선호한다", type: "N" }
    ]
  },
  {
    id: 15,
    question: "대화할 때 나는",
    answers: [
      { text: "구체적이고 정확한 표현을 사용한다", type: "S" },
      { text: "비유적이고 추상적인 표현을 사용한다", type: "N" }
    ]
  },
  {
    id: 16,
    question: "새로운 것을 배울 때 나는",
    answers: [
      { text: "단계별로 차근차근 배운다", type: "S" },
      { text: "전체적인 개념을 먼저 파악한다", type: "N" }
    ]
  },
  {
    id: 17,
    question: "나는 주로",
    answers: [
      { text: "현재에 집중하며 산다", type: "S" },
      { text: "미래를 상상하며 산다", type: "N" }
    ]
  },
  {
    id: 18,
    question: "책을 읽을 때 나는",
    answers: [
      { text: "사실과 데이터에 관심이 많다", type: "S" },
      { text: "의미와 해석에 관심이 많다", type: "N" }
    ]
  },
  {
    id: 19,
    question: "지시를 받을 때 나는",
    answers: [
      { text: "구체적이고 명확한 지시를 선호한다", type: "S" },
      { text: "큰 그림과 목적을 이해하고 싶어한다", type: "N" }
    ]
  },
  {
    id: 20,
    question: "문제를 볼 때 나는",
    answers: [
      { text: "있는 그대로의 현실을 본다", type: "S" },
      { text: "숨겨진 의미나 패턴을 찾는다", type: "N" }
    ]
  },
  {
    id: 21,
    question: "일상에서 나는",
    answers: [
      { text: "검증된 방법을 따르는 것이 편하다", type: "S" },
      { text: "새로운 방법을 시도하는 것이 즐겁다", type: "N" }
    ]
  },
  {
    id: 22,
    question: "나는",
    answers: [
      { text: "경험을 중요시한다", type: "S" },
      { text: "상상력을 중요시한다", type: "N" }
    ]
  },
  {
    id: 23,
    question: "설명할 때 나는",
    answers: [
      { text: "사실과 예시를 들어 설명한다", type: "S" },
      { text: "개념과 이론으로 설명한다", type: "N" }
    ]
  },
  {
    id: 24,
    question: "나는",
    answers: [
      { text: "현실적이라는 말을 듣는다", type: "S" },
      { text: "독창적이라는 말을 듣는다", type: "N" }
    ]
  },

  // T/F (사고/감정) - 12개
  {
    id: 25,
    question: "결정을 내릴 때 나는",
    answers: [
      { text: "논리와 객관적 기준을 중요시한다", type: "T" },
      { text: "사람들의 감정과 가치를 중요시한다", type: "F" }
    ]
  },
  {
    id: 26,
    question: "친구가 고민을 털어놓을 때 나는",
    answers: [
      { text: "해결책과 조언을 제시한다", type: "T" },
      { text: "공감하고 위로한다", type: "F" }
    ]
  },
  {
    id: 27,
    question: "갈등 상황에서 나는",
    answers: [
      { text: "옳고 그름을 따진다", type: "T" },
      { text: "관계의 조화를 우선시한다", type: "F" }
    ]
  },
  {
    id: 28,
    question: "나는",
    answers: [
      { text: "공정함이 더 중요하다", type: "T" },
      { text: "자비로움이 더 중요하다", type: "F" }
    ]
  },
  {
    id: 29,
    question: "비판을 할 때 나는",
    answers: [
      { text: "솔직하고 직설적으로 말한다", type: "T" },
      { text: "상대방의 기분을 고려해서 말한다", type: "F" }
    ]
  },
  {
    id: 30,
    question: "팀 프로젝트에서 나는",
    answers: [
      { text: "효율성과 성과를 중시한다", type: "T" },
      { text: "팀워크와 분위기를 중시한다", type: "F" }
    ]
  },
  {
    id: 31,
    question: "나는",
    answers: [
      { text: "머리로 생각하는 편이다", type: "T" },
      { text: "가슴으로 느끼는 편이다", type: "F" }
    ]
  },
  {
    id: 32,
    question: "다른 사람을 평가할 때 나는",
    answers: [
      { text: "능력과 성과를 본다", type: "T" },
      { text: "노력과 의도를 본다", type: "F" }
    ]
  },
  {
    id: 33,
    question: "나는",
    answers: [
      { text: "진실이 더 중요하다", type: "T" },
      { text: "예의가 더 중요하다", type: "F" }
    ]
  },
  {
    id: 34,
    question: "감정 표현을 할 때 나는",
    answers: [
      { text: "어색하고 서툴다", type: "T" },
      { text: "자연스럽고 편하다", type: "F" }
    ]
  },
  {
    id: 35,
    question: "논쟁 중에 나는",
    answers: [
      { text: "논리적 모순을 지적한다", type: "T" },
      { text: "상대방의 입장을 이해하려 한다", type: "F" }
    ]
  },
  {
    id: 36,
    question: "나는",
    answers: [
      { text: "분석적이라는 말을 듣는다", type: "T" },
      { text: "따뜻하다는 말을 듣는다", type: "F" }
    ]
  },

  // J/P (판단/인식) - 12개
  {
    id: 37,
    question: "일정을 관리할 때 나는",
    answers: [
      { text: "계획을 세우고 따르는 것을 선호한다", type: "J" },
      { text: "유연하게 상황에 맞춰 행동한다", type: "P" }
    ]
  },
  {
    id: 38,
    question: "여행을 갈 때 나는",
    answers: [
      { text: "상세한 계획을 미리 세운다", type: "J" },
      { text: "즉흥적으로 결정하며 즐긴다", type: "P" }
    ]
  },
  {
    id: 39,
    question: "과제나 업무를 할 때 나는",
    answers: [
      { text: "미리미리 처리한다", type: "J" },
      { text: "마감 직전에 몰아서 한다", type: "P" }
    ]
  },
  {
    id: 40,
    question: "나는",
    answers: [
      { text: "정리정돈이 잘 되어 있어야 편하다", type: "J" },
      { text: "약간 어질러져 있어도 괜찮다", type: "P" }
    ]
  },
  {
    id: 41,
    question: "결정을 내릴 때 나는",
    answers: [
      { text: "빨리 결정하고 진행한다", type: "J" },
      { text: "여러 가능성을 열어두고 천천히 결정한다", type: "P" }
    ]
  },
  {
    id: 42,
    question: "일상생활에서 나는",
    answers: [
      { text: "규칙적이고 체계적이다", type: "J" },
      { text: "자유롭고 융통성이 있다", type: "P" }
    ]
  },
  {
    id: 43,
    question: "약속 시간에 나는",
    answers: [
      { text: "항상 정확하게 지킨다", type: "J" },
      { text: "여유롭게 생각하며 조금 늦을 수 있다", type: "P" }
    ]
  },
  {
    id: 44,
    question: "계획이 변경되면 나는",
    answers: [
      { text: "스트레스를 받는다", type: "J" },
      { text: "쉽게 적응한다", type: "P" }
    ]
  },
  {
    id: 45,
    question: "나는",
    answers: [
      { text: "목표를 세우고 달성하는 것이 좋다", type: "J" },
      { text: "과정을 즐기며 가는 것이 좋다", type: "P" }
    ]
  },
  {
    id: 46,
    question: "방을 정리할 때 나는",
    answers: [
      { text: "정해진 위치에 정확히 둔다", type: "J" },
      { text: "대충 편한 곳에 둔다", type: "P" }
    ]
  },
  {
    id: 47,
    question: "나는",
    answers: [
      { text: "마무리를 빨리 짓는 것이 편하다", type: "J" },
      { text: "가능성을 열어두는 것이 편하다", type: "P" }
    ]
  },
  {
    id: 48,
    question: "나는",
    answers: [
      { text: "체계적이라는 말을 듣는다", type: "J" },
      { text: "자유로운 영혼이라는 말을 듣는다", type: "P" }
    ]
  }
];
