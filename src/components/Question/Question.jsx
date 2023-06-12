import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

import { Options } from "../Options/Options";

import "./Question.css";

export const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOprion = (options) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {
                answer: currentQuestion.answer, options
            },
        });
    };

    return (
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((options) => (
                    <Options
                        key={options}
                        options={options}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOprion(options)}
                    />
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })} >Continuar</button>
            )}
        </div>
    );
};