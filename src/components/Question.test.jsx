import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Question from './Question'

describe('Question 컴포넌트', () => {
  const mockQuestion = {
    id: 1,
    question: '모르는 사람들과의 모임에서 나는',
    answers: [
      { text: '먼저 말을 걸며 친해지려고 노력한다', type: 'E' },
      { text: '다른 사람이 말을 걸어올 때까지 기다린다', type: 'I' }
    ]
  }

  it('질문 텍스트가 올바르게 렌더링되어야 함', () => {
    const onAnswer = vi.fn()
    render(<Question question={mockQuestion} onAnswer={onAnswer} />)

    expect(screen.getByText(mockQuestion.question)).toBeInTheDocument()
  })

  it('모든 답변 옵션이 렌더링되어야 함', () => {
    const onAnswer = vi.fn()
    render(<Question question={mockQuestion} onAnswer={onAnswer} />)

    expect(screen.getByText('먼저 말을 걸며 친해지려고 노력한다')).toBeInTheDocument()
    expect(screen.getByText('다른 사람이 말을 걸어올 때까지 기다린다')).toBeInTheDocument()
  })

  it('답변 버튼 클릭 시 onAnswer가 올바른 타입으로 호출되어야 함', async () => {
    const user = userEvent.setup()
    const onAnswer = vi.fn()
    render(<Question question={mockQuestion} onAnswer={onAnswer} />)

    const firstAnswer = screen.getByText('먼저 말을 걸며 친해지려고 노력한다')
    await user.click(firstAnswer)

    expect(onAnswer).toHaveBeenCalledTimes(1)
    expect(onAnswer).toHaveBeenCalledWith('E')
  })

  it('두 번째 답변 클릭 시 올바른 타입으로 호출되어야 함', async () => {
    const user = userEvent.setup()
    const onAnswer = vi.fn()
    render(<Question question={mockQuestion} onAnswer={onAnswer} />)

    const secondAnswer = screen.getByText('다른 사람이 말을 걸어올 때까지 기다린다')
    await user.click(secondAnswer)

    expect(onAnswer).toHaveBeenCalledTimes(1)
    expect(onAnswer).toHaveBeenCalledWith('I')
  })

  it('여러 답변이 있는 질문도 올바르게 렌더링되어야 함', () => {
    const questionWith3Answers = {
      id: 2,
      question: '테스트 질문',
      answers: [
        { text: '답변 1', type: 'E' },
        { text: '답변 2', type: 'I' },
        { text: '답변 3', type: 'S' }
      ]
    }
    const onAnswer = vi.fn()
    render(<Question question={questionWith3Answers} onAnswer={onAnswer} />)

    expect(screen.getByText('답변 1')).toBeInTheDocument()
    expect(screen.getByText('답변 2')).toBeInTheDocument()
    expect(screen.getByText('답변 3')).toBeInTheDocument()
  })
})
