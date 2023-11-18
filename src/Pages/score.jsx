import React from "react";
import { useLocation } from "react-router-dom";
export default function ScoreBoard() {
    const { state } = useLocation();
    const curState = state.curState;
    const finalScore = curState ? curState.score : 0; // Access the score from the location state

    return (
        <div>
            <h2>Final Score: {finalScore}</h2>
        </div>
    );
}
