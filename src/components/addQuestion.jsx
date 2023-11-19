import { useEffect, useState } from "react";

export default function AddQuestion(props) {
    const [options, setOptions] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        selected: "",
        flags: {
            question: false,
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            selected: false,
        },
    });
    const [callEffect, setCallEffect] = useState(false);
    useEffect(
        function () {
            let correct = "";
            if (options.selected == "1") {
                correct = options.option1;
            } else if (options.selected == "2") {
                correct = options.option2;
            } else if (options.selected == "3") {
                correct = options.option3;
            } else {
                correct = options.option4;
            }
            const ques = {
                question: options.question,
                options: [
                    options.option1,
                    options.option2,
                    options.option3,
                    options.option4,
                ],
                correct_answer: correct,
            };

            const quizData = [...props.questions, ques];
            console.log(quizData);
            if (callEffect) {
                handleSubmit(quizData);
            }
        },
        [callEffect]
    );

    useEffect(
        function () {
            setOptions({
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                selected: "",
                flags: {
                    question: false,
                    option1: false,
                    option2: false,
                    option3: false,
                    option4: false,
                    selected: false,
                },
            });
        },
        [props.questions]
    );

    const handleSubmit = async (data) => {
        const response = await fetch(
            "http://localhost:8000/api/v1/quiz/createQuiz/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const json = await response.json();
        console.log(json);
        props.setServerResponse(json);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOptions((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (opr) => {
        let checker = {
            question: false,
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            selected: false,
        };
        let flag = false;
        if (options.question === "") {
            checker.question = true;
            flag = true;
        }
        if (options.option1 === "") {
            checker.option1 = true;
            flag = true;
        }
        if (options.option2 === "") {
            checker.option2 = true;
            flag = true;
        }
        if (options.option3 === "") {
            checker.option3 = true;
            flag = true;
        }
        if (options.option4 === "") {
            checker.option4 = true;
            flag = true;
        }
        if (options.selected === "") {
            checker.selected = true;
            flag = true;
        }
        if (
            flag &&
            (options.option1 === "" ||
                options.option2 === "" ||
                options.option3 === "" ||
                options.option4 === "" ||
                options.question === "" ||
                options.selected === "")
        ) {
            setOptions((prev) => {
                return {
                    ...prev,
                    flags: { ...checker },
                };
            });
            return;
        }

        if (opr === "add") {
            let correct = "";
            if (options.selected == "1") {
                correct = options.option1;
            } else if (options.selected == "2") {
                correct = options.option2;
            } else if (options.selected == "3") {
                correct = options.option3;
            } else {
                correct = options.option4;
            }
            const ques = {
                question: options.question,
                options: [
                    options.option1,
                    options.option2,
                    options.option3,
                    options.option4,
                ],
                correct_answer: correct,
            };
            props.setQuestions((prev) => {
                return [...prev, ques];
            });
        } else {
            setCallEffect(true);
        }
    };

    return (
        <div id="cur-question-container">
            <textarea
                name="question"
                id="textarea"
                value={options.question}
                onChange={handleChange}
                rows="3"
            />
            {options.flags.question && options.question === "" ? (
                <small className="warning">
                    The question must not be empty.
                </small>
            ) : (
                ""
            )}
            <div id="info">Choose the option to mark it as correct.</div>

            <div className="options-container">
                <input
                    type="radio"
                    name="selected"
                    value="1"
                    checked={options.selected == "1"}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={options.option1}
                    name="option1"
                    onChange={handleChange}
                    className="inp"
                    placeholder="Option 1"
                />
            </div>
            {options.flags.option1 && options.option1 === "" ? (
                <small className="warning">Option cannot be empty.</small>
            ) : (
                ""
            )}
            <div className="options-container">
                <input
                    type="radio"
                    name="selected"
                    value="2"
                    checked={options.selected === "2"}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={options.option2}
                    name="option2"
                    onChange={handleChange}
                    className="inp"
                    placeholder="Option 2"
                />
            </div>
            {options.flags.option2 && options.option2 === "" ? (
                <small className="warning">Option cannot be empty.</small>
            ) : (
                ""
            )}
            <div className="options-container">
                <input
                    type="radio"
                    name="selected"
                    value="3"
                    checked={options.selected === "3"}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={options.option3}
                    name="option3"
                    onChange={handleChange}
                    className="inp"
                    placeholder="Option 3"
                />
            </div>
            {options.flags.option3 && options.option3 === "" ? (
                <small className="warning">Option cannot be empty.</small>
            ) : (
                ""
            )}
            <div className="options-container">
                <input
                    type="radio"
                    name="selected"
                    value="4"
                    checked={options.selected === "4"}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    onChange={handleChange}
                    value={options.option4}
                    name="option4"
                    className="inp"
                    placeholder="Option 4"
                />
            </div>
            {options.flags.option4 && options.option4 === "" ? (
                <small className="warning">Option cannot be empty.</small>
            ) : (
                ""
            )}
            {options.flags.selected && options.selected === "" ? (
                <small className="warning">
                    One option must be marked correct
                </small>
            ) : (
                ""
            )}
            <div id="btn-container">
                <button
                    className="btn"
                    onClick={() => {
                        handleClick("add");
                    }}
                >
                    Add Question
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        handleClick("publish");
                    }}
                >
                    Publish Quiz
                </button>
            </div>
        </div>
    );
}
