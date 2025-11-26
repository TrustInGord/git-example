import React, { useState } from 'react';
import AddNoteForm from './AddNoteForm';

function MenuButton({ onAddNote }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="MenuButton">
            <button className="add-note-btn" onClick={() => setShowForm(true)}>
                Add a New Note
            </button>
            {showForm && <AddNoteForm onClose={() => setShowForm(false)} onAddNote={onAddNote} />}
        </div>
    )
}

export default MenuButton;