import {countIncreases} from './day1_p1';

export function countSlidingWindowIncreases(depths: number[]): number {
  let paddedDepths = depths.concat([0, 0]);
  let sums: number[] = [];
  for (let i = 0; i < depths.length; i++) {
    sums.push(paddedDepths[i] + paddedDepths[i + 1] + paddedDepths[i + 2])
  }

  return countIncreases(sums);
}
