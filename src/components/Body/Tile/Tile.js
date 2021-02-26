import React, {useState} from 'react';
import {connect} from "react-redux";
import {clickTile, flagTile} from "Actions";
import {BugReport, ErrorOutline} from "@material-ui/icons";
import './tile.css'
import {GAME_END} from "Helpers";

function Tile({element: {isBug, isFlag, isOpen, nearBugCount}, size, i, j, activity, open, flag}) {

    const [isLast, setIsLast] = useState(false)

    const onOpen = (e) => {
        e.preventDefault()
        if (isBug) setIsLast(true)
        if (!isFlag) open(i, j)
    }

    const onFlag = (e) => {
        e.preventDefault()
        flag(i, j)
    }

    const notOpenTemplate =
        <button className="tile not-open-tile" style={{height: size, width: size}}
                onClick={onOpen} onContextMenu={onFlag}>{(isFlag) ? <ErrorOutline/> : " "}</button>
    const openTemplate =
        <button className="tile open-tile" style={{height: size, width: size}}>
            <span>{nearBugCount}</span>
        </button>
    const bugTemplate =
        <button className={`tile ${(isLast) ? "end-bug-tile" : "open-tile"}`}
                style={{height: size, width: size}}>
            <BugReport size="medium"/>
        </button>

    if (isBug && (activity === GAME_END || isOpen)) return bugTemplate
    return (isOpen) ? openTemplate : notOpenTemplate
}

const mapStateToProps = ({settings, process}) => ({
    size: settings.tileSize,
    activity: process.activity
})

const mapDispatchToProps = (dispatch) => ({
    open: (i, j) => dispatch(clickTile(i, j)),
    flag: (i, j) => dispatch(flagTile(i, j))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile);