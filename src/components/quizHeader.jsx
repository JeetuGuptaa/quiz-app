export default function Header(props) {
    return (
        <>
            <div id="header">
                <div className="header-field-container">
                    <div>Question</div>
                    <div>
                        {props.question}/{props.questions}
                    </div>
                </div>
                <div className="header-field-container">
                    <div>Answered</div>
                    <div>{props.answered}</div>
                </div>
                <div className="header-field-container">
                    <div>Skipped</div>
                    <div>{props.skipped}</div>
                </div>
                <div className="header-field-container">
                    <div>Score</div>
                    <div>{props.score}</div>
                </div>
            </div>
        </>
    );
}
