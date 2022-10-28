import { getRiskLevelOfGrid, getRiskLevelOfPoints, isLowPoint, locateLowPointsInGrid } from '../src/low_points';

test('isLowPoint correctly detects low points', () => {
  expect(isLowPoint({
    prev: 1,
    current: 0,
    next: 1
  })).toBe(true)
  expect(isLowPoint({
    prev: 9,
    current: 2,
    next: 3
  })).toBe(true)
  expect(isLowPoint({
    prev: 1,
    current: 2,
    next: 1
  })).toBe(false)
  expect(isLowPoint({
    prev: 1,
    current: 2,
    next: 3
  })).toBe(false)
})

test('getRiskLevelOfPoints returns the correct risk level', () => {
  expect(getRiskLevelOfPoints([1])).toBe(2)
  expect(getRiskLevelOfPoints([1, 1])).toBe(4)
  expect(getRiskLevelOfPoints([0, 1])).toBe(3)
  expect(getRiskLevelOfPoints([1, 0, 5, 5])).toBe(15)
})

test('locateLowPointsInGrid returns coords of low points in grid', () => {
  expect(locateLowPointsInGrid([
    [1]
  ])).toStrictEqual([
    { x: 0, y: 0 }
  ])

  expect(locateLowPointsInGrid([
    [2, 2, 2],
    [2, 1, 2],
    [2, 2, 2],
  ])).toStrictEqual([
    { x: 1, y: 1 }
  ])

  expect(locateLowPointsInGrid([
    [2, 2, 2],
    [2, 2, 1],
    [2, 2, 2],
  ])).toStrictEqual([
    { x: 2, y:  1 }
  ])

  expect(locateLowPointsInGrid([
    [3, 2, 1],
    [2, 1, 2],
    [3, 2, 4],
  ])).toStrictEqual([
    { x: 1, y:  1 },
    { x: 2, y:  0 }
  ])
})

test('calculate the correct risk level from a grid', () => {
  expect(getRiskLevelOfGrid([
    [2,1,9,9,9,4,3,2,1,0],
    [3,9,8,7,8,9,4,9,2,1],
    [9,8,5,6,7,8,9,8,9,2],
    [8,7,6,7,8,9,6,7,8,9],
    [9,8,9,9,9,6,5,6,7,8]
  ])).toBe(15);
})
