import React, { useState } from 'react';
import quiz from '../../data/data';
import './Questions.scss';

function Questions() {
    let questions = quiz.questions;
    //let currentQuestionNumber = 0;

    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);
    const totalQuestionNumber = 4; // index starts at 0, so 4 is 5 total questions

    // console.log(questions);

    const nextQuestion = () => {
        if (selectedAnswer === questions[currentQuestionNumber].correctAnswer) {
            setScore(score + 1);
        }
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        setSelectedAnswer('');
    }

    const submitQuiz = () => {
        console.log(score);
        setIsTestCompleted(true);
    }

    return (
        <>
            <div className="quiz-header-info">
                <p className="title">CSS Quiz</p>
            </div>

            {
                !isTestCompleted ?
                    <div className="question-container">
                        {
                            questions.map((question, index) => {
                                if (index === currentQuestionNumber) {
                                    console.log(question.question);
                                    return (
                                        <>
                                            <p className="question">{index + 1}. {question.question}</p>
                                            <ul className="options">
                                                {
                                                    question.options.map((option, index) => {
                                                        return selectedAnswer === option ?
                                                            <li className="option active" onClick={() => setSelectedAnswer(option)} key={index}>{option}</li> :
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

                    </div> : <p>Test is completed: You scored {score}</p>
            }
        </>
    )
}

export default Questions