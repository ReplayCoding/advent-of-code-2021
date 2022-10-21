import { countSlidingWindowIncreases } from '../src/sliding_window';

test('returns 0 when given an empty array', () => {
  expect(countSlidingWindowIncreases([])).toBe(0)
})

test('returns 0 when given a one sized array', () => {
  expect(countSlidingWindowIncreases([1])).toBe(0)
})

test('returns 0 when given an array with size 2 (smaller than the sliding window)', () => {
  expect(countSlidingWindowIncreases([1, 2])).toBe(0)
})

test('properly counts the correct number of increases in a sliding window', () => {
  expect(countSlidingWindowIncreases([
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263
  ])).toBe(5);
})
