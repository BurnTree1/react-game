import React from 'react';
import {connect} from "react-redux";
import _ from 'lodash'
import Tile from "./Tile/Tile";

function Body({matrix}) {
    return (
        <div>
            {_.map(matrix, (array, wKey) =>
                <div key={wKey}>
                    {_.map(array, (element, hKey) => <Tile key={hKey} element={element}/>)}
                    <br/>
                </div>)}
        </div>
    );
}

export default connect(({body}) => ({matrix: body.field}))(Body);