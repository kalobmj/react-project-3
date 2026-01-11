import upArrow from '../../up-arrow-thick-small.svg';

const AddTask = () => {

    // notes for home
        // need to add button / enter key for input
        // need to add logic around adding tasks
            // adding a task might remove all placeholders
            // user can move placeholders so that they can tryout task moving function
        // rework most of the colors and design but keep simple

    return (
        <div className="input-group input-div w-50 mx-auto">
            <input type="text" className="form-control rounded-pill input-bar" placeholder="add a task" />
            <button className="input-button">
                {/* test123sssssssssss */}
                <img src={upArrow} alt="up-arrow" />
            </button>
        </div>
    );
};

export default AddTask;
