export function countIncreases(depths: number[]): number {
  if (depths.length == 0)
    return 0;

  let increasesCount = 0;
  let previousDepth = depths[0];
  for (let i = 0; i < depths.length; i++) {
    if (depths[i] > previousDepth)
      increasesCount++;

    previousDepth = depths[i];
  }

  return increasesCount;
}
