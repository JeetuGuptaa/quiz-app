import React from "react";
import { useLocation } from "react-router-dom";
export default function ScoreBoard() {
    const { state } = useLocation();
    console.log(state);
    const serverError = (
        <div id="server-err-container">
            <h1 id="err-text">Score Unavailable</h1>
        </div>
    );

    const content = () => {
        if (!state) {
            return serverError;
        } else {
            return (
                <div className="scorePage">
                    <div className="score">
                        <div className="scoreText">
                            <span>Final Score:</span> <span>{state.score}</span>
                        </div>
                        <div className="scoreText">
                            <span>Answered:</span> <span>{state.answered}</span>
                        </div>
                        <div className="scoreText">
                            <span>Skipped: </span>
                            <span>{state.skipped}</span>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return <>{content()}</>;
}
