export default function Question(props) {
    // return <h1 id="quiz-question">{props.question}</h1>;
    return (
        <div id="quiz-question">
            <div id="cur_question">{props.question}</div>
        </div>
    );
}
