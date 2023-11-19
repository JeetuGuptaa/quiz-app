import React, { useState } from "react";
import AddQuestion from "../components/addQuestion";
import SuccessMessage from "../components/successMessage";
export default function CreateQuiz() {
    const [questions, setQuestions] = useState([]);
    const [serverResponse, setServerResponse] = useState("");

    const createQuizHTML = (
        <AddQuestion
            setQuestions={setQuestions}
            questions={questions}
            setServerResponse={setServerResponse}
        />
    );

    const serverError = (
        <div id="server-err-container">
            <h1 id="err-text">Internal Sever Error</h1>
        </div>
    );

    return (
        <>
            {serverResponse === "" ? (
                createQuizHTML
            ) : serverResponse.error ? (
                serverError
            ) : (
                <SuccessMessage quizCode={serverResponse.quizCode} />
            )}
        </>
    );
}
