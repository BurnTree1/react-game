import React, {Fragment} from 'react';
import {connect} from "react-redux";

function Tile({element, size}) {
    return (
        <Fragment>
            <button style={{height: size, width: size}}>{element}</button>
        </Fragment>
    );
}

export default connect(({settings})=>({size: settings.tileSize}))(Tile);