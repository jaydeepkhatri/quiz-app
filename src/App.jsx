import React, { useState, createContext } from 'react';
import './style/main.scss';
import { Quizinfo, Questions } from './components';

export const AppContext = createContext(null);

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const [isAlertActive, setIsAlertActive] = useState(false);

    return (
        <AppContext.Provider value={{
            isQuizStarted, setIsQuizStarted,
            isAlertActive, setIsAlertActive,
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
