import { generateSlidingWindow, countSlidingWindowIncreases } from '../src/sliding_window';

test('returns empty sliding window when given an empty array', () => {
  expect(generateSlidingWindow([])).toStrictEqual([])
})

test('returns correct sliding window when given a 1 sized array', () => {
  expect(generateSlidingWindow([1])).toStrictEqual([[1, 0, 0]])
})

test('returns correct sliding window when given a 3 sized array', () => {
  expect(generateSlidingWindow([1, 2, 3])).toStrictEqual([
    [1, 2, 3],
    [2, 3, 0],
    [3, 0, 0],
  ])
})

test('returns 0 increases when given an empty array', () => {
  expect(countSlidingWindowIncreases([])).toBe(0)
})

test('returns 0 increases when given a one sized array', () => {
  expect(countSlidingWindowIncreases([1])).toBe(0)
})

test('returns 0 increases when given an array with size 2 (smaller than the sliding window)', () => {
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
