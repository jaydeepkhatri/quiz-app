import React, { useState, createContext } from 'react';
import './style/main.scss';
import { Quizinfo, Questions } from './components';

export const AppContext = createContext(null);

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [isAlertActive, setIsAlertActive] = useState(false);
    const [score, setScore] = useState(0);
    const [remainingTime, setRemainingTime] = useState(600); // value in seconds
    const [quizCompleteTime, setQuizCompleteTime] = useState(0);

    return (
        <AppContext.Provider value={{
            isQuizStarted, setIsQuizStarted,
            isAlertActive, setIsAlertActive,
            score, setScore,
            remainingTime, setRemainingTime,
            quizCompleteTime, setQuizCompleteTime
        }}>
            <div className="App">
                {
                    isQuizStarted ?
                        <Questions /> :
                        <Quizinfo /> 
                        
                }
            </div>
        </AppContext.Provider>
    )
}

export default App
