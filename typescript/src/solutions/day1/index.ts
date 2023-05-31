import { SolveFunc } from "../../lib/problem.js";

function getSortedElves(input: string) {
    return input.trim()
        .split(/\r?\n\r?\n/) // workd with both LF and CR line endings
        .map((elfCalories) =>
            elfCalories.split(/\n/) // list the calories carried by each elf
                .map((calorie) => parseInt(calorie))
                .reduce((prev, curr) => prev + curr)) // sum up the calories carried by each elf
        .sort((a, b) => a - b) // sort the list
}

function solvePartOne(elves: number[]) {
    return elves[elves.length - 1]
}

function solvePartTwo(elves: number[]) {
    return elves.slice(elves.length - 3)
        .reduce((prev, curr) => prev + curr) // sum up the last three items of the array
}

export const solve: SolveFunc = (input: string) => {
    const sortedElves = getSortedElves(input)
    console.log("day: 1 | part: 1 >>>", solvePartOne(sortedElves))
    console.log("day: 1 | part: 2 >>>", solvePartTwo(sortedElves))
}
