import { useState } from "react";
import QuizPage from "./Pages/quizPage";

function App() {
    const [markedAnswer, setMarkedAnswer] = useState("");
    const [curState, setCurState] = useState({
        question: 0,
        score: 0,
    });

    return (
        <>
            <QuizPage
                markedAnswer={markedAnswer}
                setMarkedAnswer={setMarkedAnswer}
                curState={curState}
                setCurState={setCurState}
            />
        </>
    );
}

export default App;
