import { useContext, useEffect } from "react";

import { QuizContext } from "./context/quiz";

import { Welcome } from './components/Welcome/Welcome';
import { Question } from "./components/Question/Question";
import { GameOver } from "./components/GameOver/GameOver";

import './App.css';

export const App = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    // embaralhando perguntas
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Progrmação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
};
