import React from 'react';
import {connect} from "react-redux";
import _ from 'lodash'
import Tile from "./Tile/Tile";

function Body({matrix}) {
    return (
        <div>
            {_.map(matrix, (array, i) =>
                <div key={i}>
                    {_.map(array, (element, j) => <Tile key={j} i={i} j={j} element={element}/>)}
                    <br/>
                </div>)}
        </div>
    );
}

export default connect(({body}) => ({matrix: body.field}))(Body);