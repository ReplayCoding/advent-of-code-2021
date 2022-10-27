export function isLowPoint(prev: number, cur: number, next: number): boolean {
  return (prev > cur) && (next > cur);
}

// Assumes that the grid has a consistent width and height.
export function locateLowPointsInGrid(grid: number[][]): [number, number][] {
  let maximum = Math.max(...grid.flat()) + 1;
  let paddingHorizontal: number[] = Array(grid[0].length).fill(maximum);

  // Builds a grid with padding around it
  grid = [paddingHorizontal].concat(grid).concat([paddingHorizontal]);
  grid = grid.map(line => [maximum].concat(line).concat([maximum]));

  let locationsInPaddedGrid = [];
  // Start at 1 to not check padding
  for (let x = 1; x < grid[0].length - 1; x++) {
    for (let y = 1; y < grid.length - 1; y++) {
      type WindowOfPoints = [number, number, number]
      let windowX: WindowOfPoints = [grid[y][x - 1], grid[y][x], grid[y][x + 1]]
      let windowY: WindowOfPoints = [grid[y - 1][x], grid[y][x], grid[y + 1][x]]

      if (isLowPoint(...windowX) && isLowPoint(...windowY)) {
        locationsInPaddedGrid.push([x, y]);
      }
    }
  }

  return locationsInPaddedGrid.map(l => [l[0] - 1, l[1] - 1]);
}

export function getRiskLevelOfPoints(heights: number[]): number {
  return heights
    .map(height => height + 1)
    .reduce((a, b) => a + b);
}


export function getRiskLevelOfGrid(grid: number[][]): number {
  let lowPoints =
    locateLowPointsInGrid(grid)
    .map(coord => grid[coord[1]][coord[0]]);

  return getRiskLevelOfPoints(lowPoints);
}
