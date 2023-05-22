import { WINNING_COMBINATIONS } from '.././constants'

export const checkWinnerFrom = (boarToCheck) => {
    for (const combo of WINNING_COMBINATIONS) {
        const [a, b, c] = combo
        if (boarToCheck[a]
            && boarToCheck[a] === boarToCheck[b]
            && boarToCheck[a] === boarToCheck[c]) {
            return boarToCheck[a]
        }
    }

    return null
}

export const checkEndGame = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
}