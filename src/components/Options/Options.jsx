import { useContext } from 'react';
import { QuizContext } from "../../context/quiz";

import "./Options.css";

const Options = ({ options, answer, selectOption }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className={`options ${
            quizState.answerSelected && options === answer ? 'correct' : ''
        } ${
            quizState.answerSelected && options !== answer ? 'wrong' : ''
        }`} 
        onClick={() => selectOption()}>
            <p>{options}</p>
        </div>
    )
}

export default Options