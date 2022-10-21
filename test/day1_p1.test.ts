import {countIncreases} from '../src/day1_p1';

test('given a zero sized array, return zero increases', () => {
  expect(countIncreases([])).toBe(0);
})

test('given a one sized array, return zero increases', () => {
  expect(countIncreases([1])).toBe(0);
})

test('properly counts the correct number of increases', () => {
  expect(countIncreases([
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
  ])).toBe(7);
})
