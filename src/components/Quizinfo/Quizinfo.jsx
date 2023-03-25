import React, { useContext } from 'react';
import { AppContext } from '../../App';
import { Quizalert } from '../index';
import './Quizinfo.scss';
import { AiOutlineComment, AiOutlineQuestionCircle, AiOutlineClockCircle, AiOutlineCopy } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { GiBroadsword } from 'react-icons/gi';
import { MdContentCopy } from 'react-icons/md';


function Quizinfo() {

    const { isAlertActive, setIsAlertActive } = useContext(AppContext);

    const startQuiz = () => {
        setIsAlertActive(true);
    }

    return (
        <>
            <div className="Quizinfo">
                <h1 className="title">The Daily CSS Quiz</h1>
                <div className="main-info-container">
                    <div className="left-container">
                        <ul className="links">
                            <li className="link"><span className="icon"><AiOutlineComment /></span> Leave a Comment</li>
                            <li className="link"><span className="icon"><BsBookmark /></span> Save Quiz</li>
                            <li className="link"><span className="icon"><GiBroadsword /></span> Challenge a Friend</li>
                        </ul>
                        <p className="text">Hello 👋.<br /><br />
                            Welcome to our online <strong>CSS quiz</strong>, designed to test your CSS skills and knowledge!
                            CSS (Cascading Style Sheets) is a powerful tool that is used to create and design
                            web pages. This quiz will challenge your understanding of CSS syntax, selectors,
                            properties, and how to use them to create visually appealing web pages.<br /><br />
                            This quiz consists of multiple-choice questions, where you will have to select
                            the correct answer from the options provided. The questions are designed to test
                            your ability to apply CSS concepts to real-world scenarios.</p>

                    </div>
                    <div className="right-container">
                        <strong>This Quiz Includes</strong>
                        <ul className="links">
                            <li className="link"><span className="icon"><MdContentCopy /></span> 50% Passing Percentage
                            </li>
                            <li className="link"><span className="icon"><AiOutlineQuestionCircle /></span> 5 Questions</li>
                            <li className="link"><span className="icon"><AiOutlineClockCircle /></span> 10 Mins</li>
                            <li className="link"><span className="icon"><AiOutlineCopy /></span> 1 Attempt Daily</li>
                        </ul>
                        <button onClick={() => startQuiz()}>Take Quiz</button>
                    </div>
                </div>
            </div>
            {isAlertActive ? <Quizalert /> : null}
        </>
    )
}

export default Quizinfo;