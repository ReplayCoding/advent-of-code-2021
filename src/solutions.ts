import { countIncreases } from './count_increases';
import { countSlidingWindowIncreases } from './sliding_window';
import { getRiskLevelOfGrid } from './low_points';
import { readFileSync } from 'fs';

function readLinesFromFile(fname: string): string[] {
  let buf = readFileSync(fname);
  return buf.toString().trimEnd().split("\n")
}

function day1_p1() {
  let data = readLinesFromFile('inputs/day1.txt').map(x => parseInt(x.trim()));
  console.log(countIncreases(data));
}

function day1_p2() {
  let data = readLinesFromFile('inputs/day1.txt').map(x => parseInt(x.trim()));
  console.log(countSlidingWindowIncreases(data));
}

function day9_p1() {
  let data = readLinesFromFile('inputs/day9.txt').map(line => line.split("").map(Number))
  console.log(getRiskLevelOfGrid(data));
}

console.log("Day 1 Part 1 solution:")
day1_p1();

console.log("Day 1 Part 2 solution:")
day1_p2();

console.log("Day 9 Part 1 solution:")
day9_p1();
