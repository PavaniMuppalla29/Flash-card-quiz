import React, { useState } from 'react';
import Flashcard from './Flashcrd';
import './FlashcardList.css'; 

const FlashcardList = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < flashcards.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flashcard-list">
            <div className="flashcard-container">
                <Flashcard flashcard={flashcards[currentIndex]} />
            </div>
            <div className="navigation-buttons">
                <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
                <button onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>Next</button>
            </div>
        </div>
    );
};

export default FlashcardList;
