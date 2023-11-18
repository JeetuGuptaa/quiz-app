import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [attemptQuiz, setAttempt] = useState(false);
    const [quizCode, setQuizCode] = useState("");
    const handleInput = (e) => {
        setQuizCode(e.target.value);
    };
    return (
        <>
            {attemptQuiz && (
                <input
                    type="text"
                    value={quizCode}
                    placeholder="Quiz Code"
                    onChange={handleInput}
                />
            )}
            {!attemptQuiz ? (
                <button
                    onClick={() => {
                        setAttempt((prev) => !prev);
                    }}
                >
                    Attempt Quiz
                </button>
            ) : (
                <Link to={`/quiz/${quizCode}`} className="nav-link">
                    Attempt Quiz
                </Link>
            )}
            {!attemptQuiz && <button>Create Quiz</button>}
        </>
    );
}
