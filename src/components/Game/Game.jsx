import { useState } from "react";
import { Board } from "../index";

export const Game = () => {
    const [history, setHistory] = useState([]);
    const [xIsNext, setXIsNext] = useState(true);
    
    return (
        <>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </>
    );
}