import { useState } from "react";

export default function SuccessMessage(props) {
    const [copyText, setCopyText] = useState("");
    const copyURL = () => {
        const url = "http://localhost:5173/quiz/" + props.quizCode;
        navigator.clipboard.writeText(url);
        setCopyText("URL Copied");
    };
    const copyCode = () => {
        navigator.clipboard.writeText(props.quizCode);
        setCopyText("Code Copied");
    };

    return (
        <div className="container">
            <div id="center">
                {copyText === "" ? "" : <div id="absolute">{copyText}</div>}
                <div>
                    Congratulations on successfully creating your quiz. To
                    invite others to attempt it, kindly share either the code{" "}
                    <span className="white" onClick={copyCode}>
                        {props.quizCode}
                    </span>{" "}
                    or the URL{" "}
                    <span className="white" onClick={copyURL}>
                        copy
                    </span>{" "}
                    with them.
                </div>
            </div>
        </div>
    );
}
