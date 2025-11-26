import React, { Component } from 'react';
import './Notes.css';

export class AddNoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            priority: 'low',
            category: 'Personal',
            description: '',
            error: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title.trim()) {
            this.setState({ error: 'Title cannot be empty' });
            return;
        }
        if (!this.state.description.trim()) {
            this.setState({ error: 'Description cannot be empty' });
            return;
        }
        this.props.onAddNote(this.state);
        this.props.onClose();
    };

    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value,
            error: '' 
        });
    };

    render() {
        return (
            <div className="form-overlay">
                <div className="form-container">
                    <div className="form-header">
                        <h2 className="error-message">{this.state.error || ''}</h2>
                    </div>
                    <button className="exit-btn" onClick={this.props.onClose}>×</button>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title *</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.handleChange}
                            required 
                        />
                        <label>Priority</label>
                        <select name="priority" value={this.state.priority} onChange={this.handleChange}>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        <label>Category</label>
                        <select name="category" value={this.state.category} onChange={this.handleChange}>
                            <option value="Personal">Personal</option>
                            <option value="Work">Work</option>
                            <option value="Family">Family</option>
                        </select>
                        <label>Description *</label>
                        <textarea 
                            name="description" 
                            value={this.state.description}
                            onChange={this.handleChange}
                            required
                        ></textarea>
                        <button type="submit">Enter Note</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddNoteForm;