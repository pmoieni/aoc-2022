import fs from "fs";

export type SolveFunc = (input: string) => void

export class Problem {
    private path: string;
    private solve: SolveFunc

    constructor(path: string, solve: SolveFunc) {
        this.path = path
        this.solve = solve
    }

    private readInput = () => {
        return fs.readFileSync(this.path, { encoding: "utf-8" }).toString();
    }

    public run = () => {
        const input = this.readInput()
        this.solve(input)
    }
}
