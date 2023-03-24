import React, { useContext } from 'react';
import { CgDanger } from 'react-icons/cg';
import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { CiMedal } from 'react-icons/ci';
import './Quizalert.scss';
import { AppContext } from '../../App';

function Quizalert() {
    const { setIsAlertActive, setIsQuizStarted } = useContext(AppContext);
    return (
        <>
            <div className="rules-alert">
                <h2 className="alert-title">Quiz Rules</h2>
                <ul className="rules">
                    <li className="rule-container">
                        <span className="icon"><AiOutlineClockCircle /></span>
                        <div className="rule-info">
                            <p className="rule-title">10 Mins</p>
                            <p className="rule-subtitle">Keep in mind that it&apos;s a time bound quiz</p>
                        </div>
                    </li>
                    <li className="rule-container">
                        <span className="icon"><AiOutlineQuestionCircle /></span>
                        <div className="rule-info">
                            <p className="rule-title">5 Questions</p>
                            <p className="rule-subtitle">We believe that you will ace it!</p>
                        </div>
                    </li>
                    <li className="rule-container">
                        <span className="icon"><CiMedal /></span>
                        <div className="rule-info">
                            <p className="rule-title">50% Passing Criteria</p>
                            <p className="rule-subtitle">All the best! See you on the other side.</p>
                        </div>
                    </li>
                </ul>
                <p className="alert-text"><CgDanger /> This quiz can only be attempted daily once.</p>
                <button className="start-quiz" onClick={() => setIsQuizStarted(true)}>Start</button>
            </div>
            <div className="black-cover" onClick={() => setIsAlertActive(false)}></div>
        </>
    )
}

export default Quizalert