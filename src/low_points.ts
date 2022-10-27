interface Point {
  x: number,
  y: number,
}

interface WindowOfNums {
  prev: number,
  current: number,
  next: number
}

export function isLowPoint(nums: WindowOfNums): boolean {
  return (nums.prev > nums.current) && (nums.next > nums.current);
}

// Assumes that the grid has a consistent width and height.
export function locateLowPointsInGrid(grid: number[][]): Point[] {
  let maximum = Math.max(...grid.flat()) + 1;
  let paddingHorizontal: number[] = Array(grid[0].length).fill(maximum);

  // Builds a grid with padding around it
  grid = [paddingHorizontal].concat(grid).concat([paddingHorizontal]);
  grid = grid.map(line => [maximum].concat(line).concat([maximum]));

  let locationsInPaddedGrid: Point[] = [];
  // Start at 1 to not check padding
  for (let x = 1; x < grid[0].length - 1; x++) {
    for (let y = 1; y < grid.length - 1; y++) {
      let windowX: WindowOfNums = {
        prev: grid[y][x - 1],
        current: grid[y][x],
        next: grid[y][x + 1]
      };
      let windowY: WindowOfNums = {
        prev: grid[y - 1][x],
        current: grid[y][x],
        next: grid[y + 1][x]
      };

      if (isLowPoint(windowX) && isLowPoint(windowY)) {
        locationsInPaddedGrid.push({
          // Subtract 1 to remove padding
          x : x - 1,
          y : y - 1
        });
      }
    }
  }

  return locationsInPaddedGrid;
}

export function getRiskLevelOfPoints(heights: number[]): number {
  return heights
    .map(height => height + 1)
    .reduce((a, b) => a + b);
}


export function getRiskLevelOfGrid(grid: number[][]): number {
  let lowPoints =
    locateLowPointsInGrid(grid)
    .map(coord => grid[coord.y][coord.x]);

  return getRiskLevelOfPoints(lowPoints);
}
