import { useContext } from 'react';
import { QuizContext } from "../../context/quiz";

import "./GameOver.css";
import WellDone from "../../img/welldone.svg";

export const GameOver = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de Jogo</h2>
      <p>Pontiuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p> 
      <img src={WellDone} alt="Fm de Jogo" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};