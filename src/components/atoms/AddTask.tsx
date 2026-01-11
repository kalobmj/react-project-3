import upArrow from '../../up-arrow-thick-small.svg';
import { useState } from 'react';

const AddTask = () => {

    // state for task input
    const [taskText, setTaskText] = useState('');

    const handleText = () => {
        if (taskText.trim()) {
            console.log({taskText});
            // logic for adding new task
            setTaskText('');
        }
    };

    return (
        <div className="input-group input-div w-50 mx-auto">
            <input type="text" className="form-control rounded-pill input-bar" placeholder="add a task" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            <button className="input-button" onClick={handleText}>
                <img src={upArrow} alt="up-arrow" />
            </button>
        </div>
    );
};

export default AddTask;
