import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import './Complete.scss';

function Complete() {
    const { score } = useContext(AppContext);
    const [scoreMessage, setScoreMessage] = useState('');

    const messages = ['Don\'t give up, keep trying!', 'Oh No, Try Harder!', 'Not Good Enough', 'Almost There', 'Impressive, but not perfect', 'Flawless Victory! You\'re a Quiz Master!'];

    useEffect(() => {
        setScoreMessage(messages[score]);
    }, [score]);

    return (
        <div className="test-complete">
            <p className="score">{score}</p>
            <p className="message">{scoreMessage}</p>
        </div>
    )
}

export default Complete