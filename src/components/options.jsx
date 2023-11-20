export default function Options(props) {
    const handleClick = (option) => {
        props.setMarkedAnswer(option);
    };

    const options = props.options.map(function (option, index) {
        const radioStyles = {
            backgroundColor:
                option === props.markedAnswer ? "#59006f" : "white",
        };

        const optionStyles = {
            border:
                option === props.markedAnswer
                    ? "2px solid #59006f"
                    : "1px solid black",
            color: option === props.markedAnswer ? "#59006f" : "black",
            fontWeight: option === props.markedAnswer ? "600" : "normal",
        };
        return (
            <div
                className="option123"
                key={index}
                onClick={() => {
                    props.setMarkedAnswer(option);
                }}
                style={optionStyles}
            >
                <div className="circle" style={radioStyles}></div>
                <div>{option}</div>
            </div>
        );
    });

    return <div id="quiz-answer-options">{options}</div>;
}
