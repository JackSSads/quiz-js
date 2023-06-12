import { createContext, useReducer } from "react";

import questions_complete from "../data/questions_complete";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions_complete,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
};

const quizReducer = (state, action) => {

    const category = Math.floor(Math.random() * questions_complete.length);
    const questions = questions_complete[category].questions;

    switch (action.type) {

        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "REORDER_QUESTIONS":
            

            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });

            return {
                ...state,
                questions: reorderQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;

            let endGame = false;

            if (!questions[nextQuestion]) {
                endGame = true;
            };

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            if (state.correctAnswer) return state;

            const answer = action.payload.answer;
            const option = action.payload.options;

            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };
            
        default:
            return state;
    };
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const value = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};