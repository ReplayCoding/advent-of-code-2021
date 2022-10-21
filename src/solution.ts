import { countIncreases } from './day1';
import { readFileSync } from 'fs';

function day1() {
  let buf = readFileSync('inputs/day1.txt');
  let data = buf.toString().split("\n").map(x => parseInt(x.trim()));

  console.log(data);
  console.log(countIncreases(data));
}

console.log("Day 1 solution:")
day1();
