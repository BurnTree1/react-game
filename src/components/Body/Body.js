import React from 'react';
import {connect} from "react-redux";
import _ from 'lodash'
import Tile from "./Tile/Tile";

function Body({matrix, tileSize}) {
    return (
        <div>
            {_.map(matrix, (array, i) =>
                <div key={i} style={{height: tileSize}}>
                    {_.map(array, (element, j) => <Tile key={j} i={i} j={j} element={element}/>)}
                </div>)}
        </div>
    );
}

const mapStateToProps = ({body: {field}, settings: {tileSize}}) => ({
    matrix: field,
    tileSize
})

export default connect(mapStateToProps)(Body);