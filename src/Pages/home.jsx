import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [attemptQuiz, setAttempt] = useState(false);
    const [quizCode, setQuizCode] = useState("");
    const handleInput = (e) => {
        setQuizCode(e.target.value);
    };
    return (
        <div id="home-container">
            <div id="options-container">
                {attemptQuiz && (
                    <input
                        type="text"
                        value={quizCode}
                        placeholder="Quiz Code"
                        onChange={handleInput}
                        id="home-input"
                    />
                )}
                {!attemptQuiz ? (
                    <div
                        onClick={() => {
                            setAttempt((prev) => !prev);
                        }}
                        className="home-button"
                    >
                        Attempt Quiz
                    </div>
                ) : (
                    <Link to={`/quiz/${quizCode}`} className="home-button">
                        Attempt Quiz
                    </Link>
                )}
                {!attemptQuiz && (
                    <Link to={"/createQuiz"} className="home-button">
                        Create Quiz
                    </Link>
                )}
            </div>
        </div>
    );
}
