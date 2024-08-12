
import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/DBoard';

function App() {
    const [flashcards, setFlashcards] = useState([]);
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="App">
           
            <nav>
                <ul>
                    <li>
                        <button onClick={() => handleNavigation('home')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('admin')}>Dashboard</button>
                    </li>
                </ul>
            </nav>
            <main>
                {currentPage === 'home' && <FlashcardList flashcards={flashcards} />}
                {currentPage === 'admin' && (
                    <Dashboard flashcards={flashcards} setFlashcards={setFlashcards} />
                )}
            </main>
        </div>
    );
}

export default App;
