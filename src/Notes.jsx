import React, { Component } from 'react';
import './Notes.css';

export class Notes extends Component {
    constructor(props) {
        super(props);
    }

    getPriorityColor = (priority) => {
        switch(priority) {
            case 'low': return '#00FF00';
            case 'medium': return '#FFFF00';
            case 'high': return '#FF0000';
            default: return '#00FF00';
        }
    };

    PriorityIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill={this.getPriorityColor(this.props.note.priority)}>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    );

    handleDelete = () => {
        const { note } = this.props;
        const confirmed = window.confirm(`Confirm you want to delete note '${note.title}' with category '${note.category}'`);
        if (confirmed) {
            this.props.onDelete();
        }
    };

    render() {
        const { note } = this.props;
        return (
            <div className="note" style={{ boxShadow: `1px 1px 2px ${this.getPriorityColor(note.priority)}` }}>
                <p className="category">{note.category}</p>
                <div className="title-container">
                    <h2 className="title-text">{note.title}</h2>
                    <this.PriorityIcon />
                </div>
                <p>{note.description}</p>
                <button className="delete-btn" onClick={this.handleDelete}>Delete Note</button>
            </div>
        );
    }
}

export default Notes;

/*
    Need Notes object
    Title (text default title)
    Priority (low (green color), medium (yellow color), high (red color)) default is low
    Category (Personal/Work/Family) default is personal
    Description (text) default is "Problem?"
*/