import Header from "../components/quizHeader";
import Question from "../components/question";
import Options from "../components/options";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function QuizPage(props) {
    const navigate = useNavigate();
    const { quizCode } = useParams();
    const [quizData, setQuizData] = useState({});
    let questions = [];
    if (Object.keys(quizData).length !== 0) {
        questions = quizData.data.questions; //added
    }

    const fetchData = async () => {
        const response = await fetch(
            `http://localhost:8000/api/v1/quiz/fetchQuiz/${quizCode}`
        );
        const json = await response.json();
        setQuizData(json);
    };

    useEffect(function () {
        fetchData();
    }, []);

    const handleClick = () => {
        if (props.markedAnswer.length === 0) {
            console.log("not marked");
        } else if (
            props.markedAnswer ===
            questions[props.curState.question].correct_answer
        ) {
            props.setCurState((prev) => {
                return {
                    ...prev,
                    question: prev.question + 1,
                    score: prev.score + 1,
                };
            });
        } else {
            props.setCurState((prev) => {
                return {
                    ...prev,
                    question: prev.question + 1,
                };
            });
        }
    };

    const content = () => {
        if (quizData == {}) {
            return (
                <>
                    <h1>Loading</h1>
                </>
            );
        } else {
            return (
                <>
                    {props.curState.question === questions.length ? null : (
                        <>
                            <Header />
                            <div>Score : {props.curState.score}</div>

                            <Question
                                question={
                                    questions[props.curState.question].question
                                }
                            />
                            <Options
                                options={
                                    questions[props.curState.question].options
                                }
                                markedAnswer={props.markedAnswer}
                                setMarkedAnswer={props.setMarkedAnswer}
                            />
                            <button onClick={handleClick}>
                                {props.curState.question ===
                                questions.length - 1
                                    ? "Submit"
                                    : "Next"}
                            </button>
                        </>
                    )}
                </>
            );
        }
    };

    useEffect(
        function () {
            if (
                questions.length === props.curState.question &&
                questions.length !== 0
            ) {
                navigate("/score/sl", { state: { curState: props.curState } });
            }
        },
        [props.curState]
    );

    return <>{content()}</>;
}
