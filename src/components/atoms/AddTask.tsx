import upArrow from '../../up-arrow-thick-small.svg';
import { useState } from 'react';

const AddTask = ({ text, setText }: { text:string; setText: (val: string) => void }) => {
    const [newTask, setNewTask] = useState('');

    const handleText = () => {
        if (newTask.trim()) {
            setText(newTask);
            setNewTask('');
        }
    };

    return (
        <div className="input-group input-div w-50 mx-auto">
            <input
                type="text"
                className="form-control rounded-pill input-bar"
                placeholder="add a task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button
                className="input-button"
                onClick={handleText}
            >
                <img
                    src={upArrow}
                    alt="up-arrow"
                />
            </button>
        </div>
    );
};

export default AddTask;
