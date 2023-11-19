import { useState } from "react";
import QuizPage from "./Pages/quizPage";
import Home from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScoreBoard from "./Pages/score";
import NotFound from "./Pages/notfound";

function App() {
    const [markedAnswer, setMarkedAnswer] = useState("");
    const [curState, setCurState] = useState({
        question: 0,
        score: 0,
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/quiz/:quizCode"
                    element={
                        <QuizPage
                            markedAnswer={markedAnswer}
                            setMarkedAnswer={setMarkedAnswer}
                            curState={curState}
                            setCurState={setCurState}
                        />
                    }
                />
                <Route path="/score/:id" element={<ScoreBoard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
