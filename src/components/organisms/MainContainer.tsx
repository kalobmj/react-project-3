// main container for 3 different columns

import Column from "../molecules/Column";

const MainContainer = () => {

    return (
        <div className="container">
            <h1>center this</h1>
            <Column/>
            <Column/>
            <Column/>
        </div>
    )

};

export default MainContainer;
