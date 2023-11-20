export default function Options(props) {
    const handleClick = (option) => {
        props.setMarkedAnswer(option);
    };

    const options = props.options.map(function (option, index) {
        const radioStyles = {
            backgroundColor: option === props.markedAnswer ? "Green" : "white",
        };

        const optionStyles = {
            border:
                option === props.markedAnswer
                    ? "2px solid Green"
                    : "1px solid cadetblue",
            color: option === props.markedAnswer ? "Green" : "black",
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
