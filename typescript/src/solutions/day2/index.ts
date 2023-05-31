enum Hand {
    ROCK,
    PAPER,
    SCISSORS
}

const GamePoints = new Map([
    [[Hand.ROCK, Hand.SCISSORS].toString(), 3], // 0 + 3
    [[Hand.PAPER, Hand.ROCK].toString(), 1], // 0 + 1
    [[Hand.SCISSORS, Hand.PAPER].toString(), 2], // 0 + 2
    [[Hand.ROCK, Hand.ROCK].toString(), 4], // 3 + 1
    [[Hand.PAPER, Hand.PAPER].toString(), 5], // 3 + 2
    [[Hand.SCISSORS, Hand.SCISSORS].toString(), 6], // 3 + 3
    [[Hand.ROCK, Hand.PAPER].toString(), 8], // 6 + 2
    [[Hand.PAPER, Hand.SCISSORS].toString(), 9], // 6 + 3
    [[Hand.SCISSORS, Hand.ROCK].toString(), 7] // 6 + 1
])

const OpponentHand = new Map([
    ['A', Hand.ROCK],
    ['B', Hand.PAPER],
    ['C', Hand.SCISSORS]
])

const PlayerHand = new Map([
    ['X', Hand.ROCK],
    ['Y', Hand.PAPER],
    ['Z', Hand.SCISSORS]
])

type Game = [Hand, Hand]

function getGameScore(games: Game[]): number {
    return games.map((game) => {
        return GamePoints.get(game.toString())!
    })
        .reduce((prev, curr) => prev + curr)
}

function parseGames(input: string): Game[] {
    return input.trim()
        .split(/\n/)
        .map((gameStr) => {
            const gameArr = gameStr.split(" ")
            return [OpponentHand.get(gameArr[0])!, PlayerHand.get(gameArr[1])!]
        })
}

export const solve = (input: string) => {
    console.log("day 2 >>>", getGameScore(parseGames(input)))
} 
