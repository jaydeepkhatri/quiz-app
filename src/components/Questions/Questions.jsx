import React, { useState, useEffect, useContext } from 'react';
import { Complete } from '../index';
import quiz from '../../data/data';
import './Questions.scss';
import { AppContext } from '../../App';
import formatDuration from '../../utils/utils';

function Questions() {
    const { score, setScore, remainingTime, setRemainingTime } = useContext(AppContext);

    const questions = quiz.questions;
    //let currentQuestionNumber = 0;

    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const totalQuestionNumber = 4; // index starts at 0, so 4 is 5 total questions

    // console.log(questions);

    // Next Question
    const nextQuestion = () => {
        if (selectedAnswer === '') {
            //To Make sure the user clicks the option
            return;
        }
        if (selectedAnswer === questions[currentQuestionNumber].correctAnswer) {
            setScore(score + 1);
            console.log('test')
        }
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setSelectedAnswer('');

    }

    // Test Complete
    const submitQuiz = () => {
        // console.log(score);
        if (selectedAnswer === questions[currentQuestionNumber].correctAnswer) {
            setScore(score + 1);
            console.log('test')
        }
        setSelectedAnswer('');
        setIsTestCompleted(true);
    }

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prevTime => {
                if (prevTime === 1) {
                    clearInterval(timer);
                    submitQuiz();
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            {
                !isTestCompleted ?
                    <>
                        <div className="quiz-header-info">
                            <p className="title">CSS Quiz</p>
                        </div>
                        <div className="question-container">
                            <div className="timer">{formatDuration(remainingTime)}</div>
                            {
                                questions.map((question, index) => {
                                    if (index === currentQuestionNumber) {
                                        // console.log(question.question);
                                        return (
                                            <>
                                                <p className="question">{index + 1}. {question.question}</p>
                                                <ul className="options">
                                                    {
                                                        question.options.map((option, index) => {
                                                            return selectedAnswer === option ?
                                                                <li className={`option ${selectedAnswer === option ? 'active' : ''}`} onClick={() => setSelectedAnswer(option)} key={index}>{option}</li> :
                                                                <li className="option" onClick={() => setSelectedAnswer(option)} key={index}>{option}</li>;

                                                        })
                                                    }
                                                </ul>
                                            </>
                                        );
                                    }
                                })
                            }
                            {
                                currentQuestionNumber < totalQuestionNumber ?
                                    <button className="next-button" onClick={() => nextQuestion()}>Next</button> :
                                    <button className="next-button" onClick={() => submitQuiz()}>Submit</button>
                            }

                        </div>
                    </> : <Complete />
            }
        </>
    )
}

export default Questions