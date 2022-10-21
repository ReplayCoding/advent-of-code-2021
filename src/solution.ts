import { countIncreases } from './count_increases';
import { countSlidingWindowIncreases } from './sliding_window';
import { readFileSync } from 'fs';

function day1_p1() {
  let buf = readFileSync('inputs/day1.txt');
  let data = buf.toString().split("\n").map(x => parseInt(x.trim()));

  console.log(countIncreases(data));
}

function day1_p2() {
  let buf = readFileSync('inputs/day1.txt');
  let data = buf.toString().split("\n").map(x => parseInt(x.trim()));

  console.log(countSlidingWindowIncreases(data));
}

console.log("Day 1 Part 1 solution:")
day1_p1();

console.log("Day 1 Part 2 solution:")
day1_p2();
