import Header from "../components/quizHeader";
import Question from "../components/question";
import Options from "../components/options";
const questions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "London", "Paris", "Dublin"],
        answer: "Paris",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent Van Gogh",
            "Pablo Picasso",
            "Leonardo Da Vinci",
            "Claude Monet",
        ],
        answer: "Leonardo Da Vinci",
    },
    {
        question: "What's 3 + 4",
        options: ["7", "6", "5", "4"],
        answer: "7",
    },
    {
        question: "What's 2 to the power 11",
        options: ["1024", "4096", "2048", "516"],
        answer: "2048",
    },
    {
        question: "What is the Binary Representation of 35",
        options: ["100011", "110011", "100011", "100001"],
        answer: "100011",
    },
    {
        question: "What's 2 to the power 10",
        options: ["1024", "4096", "2048", "516"],
        answer: "1024",
    },
];
export default function QuizPage(props) {
    const handleClick = () => {
        if (props.markedAnswer.length === 0) {
            console.log("not marked");
            return;
        }
        if (props.markedAnswer === questions[props.curState.question].answer) {
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
    return (
        <>
            <Header />
            <div>Score : {props.curState.score}</div>
            <Question question={questions[props.curState.question].question} />
            <Options
                options={questions[props.curState.question].options}
                markedAnswer={props.markedAnswer}
                setMarkedAnswer={props.setMarkedAnswer}
            />
            <button onClick={handleClick}>
                {props.curState.question === questions.length - 1
                    ? "Submit"
                    : "Next"}
            </button>
        </>
    );
}
