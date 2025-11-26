// placeholder for each column
// columns default as this, hence why its in atom folder

// needs to be how our list will look but grey

// might do last when lists are fleshed out

// can possibly take items component and have each item just empty and grey color as placeholder

// Default SortableJS
import Sortable from 'sortablejs';


const Placeholder = () => {

    // placeholders take in items
    // items will pass place prop
    // determins if fake item or not

    return (
        <div className="placeholder">

            {/* <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                    The current link item
                </a>
                <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
            </div> */}

            <ul id="simpleList" className="list-group">
                <li className="list-group-item">This is <a href="http://SortableJS.github.io/Sortable/">Sortable</a></li>
                <li className="list-group-item">It works with Bootstrap...</li>
                <li className="list-group-item">...out of the box.</li>
                <li className="list-group-item">It has support for touch devices.</li>
                <li className="list-group-item">Just drag some elements around.</li>
            </ul>

        </div>
    )

};

export default Placeholder;
