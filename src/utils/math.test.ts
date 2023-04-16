import { add } from './math'

describe('math', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
