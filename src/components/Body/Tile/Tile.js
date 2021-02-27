import React, {useState} from 'react';
import {connect} from "react-redux";
import {clickTile, clickFlagTile} from "Actions";
import {BugReport, ErrorOutline} from "@material-ui/icons";
import './tile.css'
import {GAME_END, colorCodes} from "Helpers";

function Tile({element: {isBug, isFlag, isOpen, nearBugCount}, size, i, j, activity, open, flag}) {

    const [isLast, setIsLast] = useState(false)

    const onOpen = (e) => {
        e.preventDefault()
        if (isBug && !isFlag) setIsLast(true)
        open(i, j)
    }

    const onFlag = (e) => {
        e.preventDefault()
        flag(i, j)
    }

    const notOpenTemplate =
        <button className="tile not-open-tile"
                style={{height: size, width: size, color: (!isFlag) ? "transparent" : "black"}}
                onClick={onOpen} onContextMenu={onFlag}>
            <span>
                {(isFlag) ? <ErrorOutline/> : "C"}
            </span>
        </button>
    const openTemplate =
        <button className="tile open-tile" style={{height: size, width: size, color: colorCodes[nearBugCount]}}>
            <span>{nearBugCount}</span>
        </button>
    const bugTemplate =
        <button className={`tile ${(isLast) ? "end-bug-tile" : "open-tile"}`}
                style={{height: size, width: size}}>
            <span>
                <BugReport size="medium"/>
            </span>
        </button>

    if (isBug && (activity === GAME_END || isOpen)) return bugTemplate
    return (isOpen) ? openTemplate : notOpenTemplate
}

const mapStateToProps = ({settings: {tileSize}, process: {activity, remainBugs}}) => ({
    size: tileSize,
    activity, remainBugs
})

const mapDispatchToProps = (dispatch) => ({
    open: (i, j) => dispatch(clickTile(i, j)),
    flag: (i, j) => dispatch(clickFlagTile(i, j))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile);