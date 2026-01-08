// main container for 3 different columns

import Placeholder from "../atoms/Placeholder";
import Column from "../molecules/Column";

const MainContainer = () => {

    // ## variables (props)
    // will pass variables:
    // (obj key val pairs of items in each col) -> can use useState
        // (placeholder) yes, no
        // (column) yes, no
    // binary will decide if shown or not
    // these will pass up from place, col components
    // place will check for items list len (hashmap obj), 
        // if no items display place and hide col
        // otherwise display col and hide place

    return (
        <div className="container">
            {/* <h1>center this</h1> */}
            <Column/>
            <Column/>
            <Column/>
        </div>
    )

};

export default MainContainer;
