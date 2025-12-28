// MBTI 점수 계산 및 유형 판정 로직

/**
 * 사용자의 답변을 기반으로 MBTI 점수 계산
 * @param {Array} answers - 사용자의 답변 배열 [{ questionId, selectedType }]
 * @returns {Object} - 각 지표별 점수 { E, I, S, N, T, F, J, P }
 */
export const calculateScores = (answers) => {
  const scores = {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0
  };

  answers.forEach(answer => {
    if (answer.selectedType && scores.hasOwnProperty(answer.selectedType)) {
      scores[answer.selectedType]++;
    }
  });

  return scores;
};

/**
 * 점수를 기반으로 MBTI 유형 결정
 * @param {Object} scores - 각 지표별 점수
 * @returns {string} - MBTI 유형 (예: "ENFP")
 */
export const determineMBTIType = (scores) => {
  let type = '';

  // E vs I
  type += scores.E >= scores.I ? 'E' : 'I';

  // S vs N
  type += scores.S >= scores.N ? 'S' : 'N';

  // T vs F
  type += scores.T >= scores.F ? 'T' : 'F';

  // J vs P
  type += scores.J >= scores.P ? 'J' : 'P';

  return type;
};

/**
 * 각 지표별 비율 계산 (차트용)
 * @param {Object} scores - 각 지표별 점수
 * @returns {Object} - 각 지표별 비율 { EI, SN, TF, JP }
 */
export const calculatePercentages = (scores) => {
  const totalEI = scores.E + scores.I;
  const totalSN = scores.S + scores.N;
  const totalTF = scores.T + scores.F;
  const totalJP = scores.J + scores.P;

  return {
    EI: {
      E: totalEI > 0 ? Math.round((scores.E / totalEI) * 100) : 50,
      I: totalEI > 0 ? Math.round((scores.I / totalEI) * 100) : 50
    },
    SN: {
      S: totalSN > 0 ? Math.round((scores.S / totalSN) * 100) : 50,
      N: totalSN > 0 ? Math.round((scores.N / totalSN) * 100) : 50
    },
    TF: {
      T: totalTF > 0 ? Math.round((scores.T / totalTF) * 100) : 50,
      F: totalTF > 0 ? Math.round((scores.F / totalTF) * 100) : 50
    },
    JP: {
      J: totalJP > 0 ? Math.round((scores.J / totalJP) * 100) : 50,
      P: totalJP > 0 ? Math.round((scores.P / totalJP) * 100) : 50
    }
  };
};

/**
 * 전체 결과 계산
 * @param {Array} answers - 사용자의 답변 배열
 * @returns {Object} - { type, scores, percentages }
 */
export const calculateResult = (answers) => {
  const scores = calculateScores(answers);
  const type = determineMBTIType(scores);
  const percentages = calculatePercentages(scores);

  return {
    type,
    scores,
    percentages
  };
};
