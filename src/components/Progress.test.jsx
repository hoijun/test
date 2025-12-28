import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Progress from './Progress'

describe('Progress 컴포넌트', () => {
  it('현재 진행 상황을 올바르게 표시해야 함', () => {
    render(<Progress current={5} total={10} />)

    expect(screen.getByText('질문 5 / 10')).toBeInTheDocument()
  })

  it('퍼센티지를 올바르게 계산하고 표시해야 함', () => {
    render(<Progress current={3} total={12} />)

    // 3/12 = 25%
    expect(screen.getByText('25%')).toBeInTheDocument()
  })

  it('100% 진행 상황을 올바르게 표시해야 함', () => {
    render(<Progress current={48} total={48} />)

    expect(screen.getByText('질문 48 / 48')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('0% 진행 상황을 올바르게 처리해야 함', () => {
    render(<Progress current={0} total={10} />)

    expect(screen.getByText('질문 0 / 10')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('소수점이 있는 퍼센티지를 반올림해야 함', () => {
    render(<Progress current={1} total={3} />)

    // 1/3 = 33.333... ≈ 33%
    expect(screen.getByText('33%')).toBeInTheDocument()
  })

  it('프로그레스 바의 너비가 올바르게 설정되어야 함', () => {
    const { container } = render(<Progress current={6} total={12} />)

    // 6/12 = 50%
    const progressBar = container.querySelector('.bg-gradient-to-r')
    expect(progressBar).toHaveStyle({ width: '50%' })
  })

  it('다양한 진행 상황에서 올바른 너비를 가져야 함', () => {
    const { container, rerender } = render(<Progress current={1} total={4} />)

    // 1/4 = 25%
    let progressBar = container.querySelector('.bg-gradient-to-r')
    expect(progressBar).toHaveStyle({ width: '25%' })

    // 3/4 = 75%
    rerender(<Progress current={3} total={4} />)
    progressBar = container.querySelector('.bg-gradient-to-r')
    expect(progressBar).toHaveStyle({ width: '75%' })
  })
})
