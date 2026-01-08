// each item that will go into the column, which goes into the main container

// item will have text value that changes from user input

// each item will have same design

// item will pass a 'section' parameter, this is left/middle/right, this determines 

const Item = () => {

    return (
        <li className="list-group-item">
            <span className="item-span">
                {/* task placeholder below */}
                {`Task ${Math.floor(Math.random() * 3) + 1
                    }`}
            </span>
        </li>
    )

};

export default Item;
