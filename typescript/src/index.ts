import { Problem } from "./lib/problem.js";
import * as day1 from "./solutions/day1/index.js";
import * as day2 from "./solutions/day2/index.js";

function test() {
    const day1Solution = new Problem("src/solutions/day1/input.txt", day1.solve)
    day1Solution.run();

    const day2Solution = new Problem("src/solutions/day2/input.txt", day2.solve)
    day2Solution.run();
}

test();
