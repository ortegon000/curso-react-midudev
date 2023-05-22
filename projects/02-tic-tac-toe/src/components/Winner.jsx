import { Square } from "./Square"

export function Winner({ winner, resetGame }) {

    if (winner === null) return null

    const winnerText = winner ? `Winner is ${winner}` : 'Draw'

    return (
        <section className="winner">
            <h2>{winnerText}</h2>

            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
        </section>
    )
}