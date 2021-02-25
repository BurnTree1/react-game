import React from 'react';
import {connect} from "react-redux";
import {gameOver, openTile} from "Actions";
import {BugReport} from "@material-ui/icons";
import './tile.css'

function Tile({element, size, i, j, endGame, open}) {

    const onOpen = () => {
        if (element.isBug) endGame()
        open(i,j)
    }

    const notOpenTemplate = <button className="tile not-open-tile" style={{height: size, width: size}}
                                    onClick={onOpen}>&nbsp;</button>
    const openTemplate = <button className="tile open-tile" style={{height: size, width: size}}>
        <span>{element.nearBugCount}</span>
    </button>
    const bugTemplate = <button className="tile open-tile" style={{height: size, width: size}}>
        <BugReport size="medium"/>
    </button>

    if(!element.isOpen) return notOpenTemplate
    return (element.isBug) ? bugTemplate : openTemplate
}

const mapStateToProps = ({settings}) => ({
    size: settings.tileSize
})

const mapDispatchToProps = (dispatch) => ({
    endGame: () => dispatch(gameOver()),
    open: (i,j) => dispatch(openTile(i,j))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile);