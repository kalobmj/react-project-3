const AddTask = () => {

    // notes for home
        // need to add button / enter key for input
        // need to add logic around adding tasks
            // adding a task might remove all placeholders
        // make so user cant move placeholders
        // rework most of the colors and design but keep simple

    return (
        <div className="input-group w-50 mx-auto">
            <input type="text" className="form-control rounded-pill input-bar" placeholder="add a task" />
        </div>
    );
};

export default AddTask;
