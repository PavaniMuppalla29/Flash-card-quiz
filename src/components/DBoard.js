// src/components/Dashboard.js
import React, { useState } from 'react';
import FlashcardForm from './FlashcardForm';
import './Dashboard.css';

const Dashboard = ({ flashcards, setFlashcards }) => {
    const [editingIndex, setEditingIndex] = useState(null);

    const handleSave = (newFlashcard) => {
        if (editingIndex !== null) {
            const updatedFlashcards = [...flashcards];
            updatedFlashcards[editingIndex] = newFlashcard;
            setFlashcards(updatedFlashcards);
            setEditingIndex(null);
        } else {
            setFlashcards([...flashcards, newFlashcard]);
        }
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        setFlashcards(flashcards.filter((_, i) => i !== index));
    };

    return (
        <div className="dashboard-container">
            <h2>Admin Dashboard</h2>
            <FlashcardForm
                onSave={handleSave}
                flashcard={editingIndex !== null ? flashcards[editingIndex] : null}
            />
            <ul>
                {flashcards.map((flashcard, index) => (
                    <li key={index}>
                        {flashcard.question}
                        <div>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
