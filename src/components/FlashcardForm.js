// src/components/FlashcardForm.js
import React, { useState, useEffect } from 'react';

const FlashcardForm = ({ onSave, flashcard }) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (flashcard) {
            setQuestion(flashcard.question);
            setAnswer(flashcard.answer);
        } else {
            setQuestion('');
            setAnswer('');
        }
    }, [flashcard]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ question, answer });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" required />
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Answer" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default FlashcardForm;
