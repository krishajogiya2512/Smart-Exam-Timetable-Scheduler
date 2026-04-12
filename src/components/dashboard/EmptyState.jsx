import React from 'react';
import { Plus } from 'lucide-react';
import '../../styles/EmptyState.css';

export default function EmptyState({ onGenerateClick }) {
    return (
        <div className="empty-state">
            <div className="plus-circle">
                <Plus size={32} color="#4f46e5" />
            </div>
            <div className="create-title">Create a new timetable</div>
            <div className="create-desc">
                Click the + button or use the sidebar to start scheduling a new exam timetable
            </div>
            
            <div className="separator">
                <div className="sep-line"></div>
                <span className="sep-text">or</span>
                <div className="sep-line"></div>
            </div>

            <button className="btn btn-primary" onClick={onGenerateClick}>
                Generate timetable
            </button>
        </div>
    );
}
