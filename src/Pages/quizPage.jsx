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
    console.log(quizData);
    if (Object.keys(quizData).length !== 0) {
        console.log(quizData);
        if (quizData.error) {
            questions = [];
        } else questions = quizData.data.questions; //added
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
        } else if (quizData.error) {
            return (
                <>
                    <h1>{quizData.error}</h1>
                </>
            );
        } else {
            return (
                <div id="quiz-page">
                    {props.curState.question === questions.length ? null : (
                        <>
                            <Header
                                answered={props.curState.question}
                                questions={questions.length}
                                question={props.curState.question + 1}
                                skipped={0}
                                score={props.curState.score}
                            />

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
                            <div class="center">
                                <div className="eightyperc">
                                    <button onClick={handleClick} class="bttn">
                                        {props.curState.question ===
                                        questions.length - 1
                                            ? "Submit"
                                            : "Next"}
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            );
        }
    };

    useEffect(
        function () {
            if (
                questions.length === props.curState.question &&
                questions.length !== 0
            ) {
                navigate(`/score/${quizCode}`, {
                    state: { curState: props.curState },
                });
            }
        },
        [props.curState]
    );

    return <>{content()}</>;
}
