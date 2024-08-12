import React, { useState } from 'react';
import './Flashc.css';

const Flashcard = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flashcard-container">
            <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="flashcard-inner">
                    <div className="flashcard-front">
                        <h2>{flashcard.question}</h2>
                    </div>
                    <div className="flashcard-back">
                        <p>{flashcard.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
