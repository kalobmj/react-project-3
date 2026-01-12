import upArrow from '../../up-arrow-thick-small.svg';
import { useState } from 'react';

const AddTask = ({ text, setText }: { text:string; setText: (val: string) => void }) => {

    const handleText = () => {
        if (text.trim()) {
            console.log({text});
            // logic for adding new task
            setText('');
        }
    };

    return (
        <div className="input-group input-div w-50 mx-auto">
            <input type="text" className="form-control rounded-pill input-bar" placeholder="add a task" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="input-button" onClick={handleText}>
                <img src={upArrow} alt="up-arrow" />
            </button>
        </div>
    );
};

export default AddTask;
