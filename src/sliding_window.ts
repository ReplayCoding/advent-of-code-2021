import { countIncreases } from './count_increases';

export function generateSlidingWindow(inputs: number[]): number[][] {
  let paddedDepths = inputs.concat([0, 0]);
  let windows: number[][] = [];
  for (let i = 0; i < inputs.length; i++) {
    windows.push([paddedDepths[i], paddedDepths[i + 1], paddedDepths[i + 2]])
  }

  return windows;
}

export function countSlidingWindowIncreases(depths: number[]): number {
  return countIncreases(
    generateSlidingWindow(depths).map(n => n.reduce((x, y) => x + y))
  );
}
