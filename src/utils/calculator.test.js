import { describe, it, expect } from 'vitest'
import {
  calculateScores,
  determineMBTIType,
  calculatePercentages,
  calculateResult
} from './calculator'

describe('calculateScores', () => {
  it('빈 배열에 대해 모든 점수가 0이어야 함', () => {
    const result = calculateScores([])
    expect(result).toEqual({
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    })
  })

  it('답변에 따라 올바른 점수를 계산해야 함', () => {
    const answers = [
      { questionId: 1, selectedType: 'E' },
      { questionId: 2, selectedType: 'E' },
      { questionId: 3, selectedType: 'I' },
      { questionId: 13, selectedType: 'S' },
      { questionId: 14, selectedType: 'N' }
    ]
    const result = calculateScores(answers)
    expect(result.E).toBe(2)
    expect(result.I).toBe(1)
    expect(result.S).toBe(1)
    expect(result.N).toBe(1)
    expect(result.T).toBe(0)
  })

  it('유효하지 않은 타입은 무시해야 함', () => {
    const answers = [
      { questionId: 1, selectedType: 'E' },
      { questionId: 2, selectedType: 'INVALID' },
      { questionId: 3, selectedType: null }
    ]
    const result = calculateScores(answers)
    expect(result.E).toBe(1)
  })
})

describe('determineMBTIType', () => {
  it('각 지표에서 더 높은 점수를 가진 타입을 선택해야 함', () => {
    const scores = {
      E: 8, I: 4,
      S: 3, N: 9,
      T: 7, F: 5,
      J: 4, P: 8
    }
    const result = determineMBTIType(scores)
    expect(result).toBe('ENTP')
  })

  it('동점일 경우 첫 번째 타입(E, S, T, J)을 선택해야 함', () => {
    const scores = {
      E: 6, I: 6,
      S: 6, N: 6,
      T: 6, F: 6,
      J: 6, P: 6
    }
    const result = determineMBTIType(scores)
    expect(result).toBe('ESTJ')
  })

  it('모든 점수가 0일 때도 작동해야 함', () => {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    }
    const result = determineMBTIType(scores)
    expect(result).toBe('ESTJ')
  })
})

describe('calculatePercentages', () => {
  it('점수를 올바른 비율로 변환해야 함', () => {
    const scores = {
      E: 8, I: 4,
      S: 6, N: 6,
      T: 9, F: 3,
      J: 2, P: 10
    }
    const result = calculatePercentages(scores)

    expect(result.EI.E).toBe(67) // 8/12 = 66.67% ≈ 67%
    expect(result.EI.I).toBe(33)
    expect(result.SN.S).toBe(50)
    expect(result.SN.N).toBe(50)
    expect(result.TF.T).toBe(75) // 9/12 = 75%
    expect(result.TF.F).toBe(25)
  })

  it('총합이 0일 때 50:50으로 처리해야 함', () => {
    const scores = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0
    }
    const result = calculatePercentages(scores)

    expect(result.EI.E).toBe(50)
    expect(result.EI.I).toBe(50)
    expect(result.SN.S).toBe(50)
    expect(result.SN.N).toBe(50)
  })
})

describe('calculateResult', () => {
  it('전체 결과를 올바르게 계산해야 함', () => {
    const answers = [
      { questionId: 1, selectedType: 'E' },
      { questionId: 2, selectedType: 'E' },
      { questionId: 3, selectedType: 'I' },
      { questionId: 13, selectedType: 'N' },
      { questionId: 14, selectedType: 'N' },
      { questionId: 15, selectedType: 'S' },
      { questionId: 25, selectedType: 'F' },
      { questionId: 26, selectedType: 'F' },
      { questionId: 27, selectedType: 'T' },
      { questionId: 37, selectedType: 'P' },
      { questionId: 38, selectedType: 'P' },
      { questionId: 39, selectedType: 'J' }
    ]

    const result = calculateResult(answers)

    expect(result.type).toBe('ENFP')
    expect(result.scores.E).toBe(2)
    expect(result.scores.I).toBe(1)
    expect(result.percentages).toBeDefined()
    expect(result.percentages.EI.E).toBeGreaterThan(0)
  })

  it('빈 답변 배열도 처리해야 함', () => {
    const result = calculateResult([])

    expect(result.type).toBe('ESTJ')
    expect(result.scores).toEqual({
      E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
    })
  })
})
