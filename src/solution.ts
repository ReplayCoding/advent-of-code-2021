import { countIncreases } from './count_increases';
import { readFileSync } from 'fs';

function day1_p1() {
  let buf = readFileSync('inputs/day1_p1.txt');
  let data = buf.toString().split("\n").map(x => parseInt(x.trim()));

  console.log(countIncreases(data));
}

console.log("Day 1 Part 1 solution:")
day1_p1();
