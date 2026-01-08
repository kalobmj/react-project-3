// component for each of 3 columns
// columns will contain items
// columns will have different color tints depnding on left middle or right

// columns will pass up parameter 'section' which is left/middle/right

// cols will also pass down section parameter to items, to keep track of them, and help with status, all completed = green, some in progress = yellow etc.

import Item from "../atoms/item";

// wed notes
// will render 3 columns
// if tasks are included in column, render them
// else render placeholder items (move placeholder from molecule to atom) (example below)
//     For the placeholder logic:
//   // Inside Column
//   {tasks.length === 0 ? (
//     <PlaceholderItems />
//   ) : (
//     tasks.map(task => <Item key={task.id} {...task} />)
//   )}

const Column = () => {

    return (
        <div className="column">
            <Item />
        </div>
    )

};

export default Column;
