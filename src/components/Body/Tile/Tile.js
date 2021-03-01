import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {clickTile, clickFlagTile} from "Actions";
import {BugReport, ErrorOutline} from "@material-ui/icons";
import {GAME_END, colorCodes} from "Helpers";
import {soundClick, soundFlag} from "Assets"
import useSound from "use-sound";

function Tile({element: {isBug, isFlag, isOpen, nearBugCount}, size, i, j, activity, volume, open, flag}) {

    const [isLast, setIsLast] = useState(false)
    const [soundVolume, setSoundVolume] = useState(volume)
    const [clickS] = useSound(soundClick, {volume: soundVolume})
    const [flagS] = useSound(soundFlag, {volume: soundVolume * 0.4})

    useEffect(() => {
        setSoundVolume(volume)
    }, [volume])

    const onOpen = (e) => {
        e.preventDefault()
        //for mark a red point in the end
        if (isBug && !isFlag) setIsLast(true)
        clickS()
        open(i, j)
    }

    const onFlag = (e) => {
        e.preventDefault()
        flagS()
        flag(i, j)
    }

    const notOpenTemplate =
        <button className="tile not-open-tile"
                style={{height: size, width: size, color: (!isFlag) ? "transparent" : "black"}}
                onClick={onOpen} onContextMenu={onFlag}>
            {(isFlag) ? <ErrorOutline/> : "C"}
        </button>
    const openTemplate =
        <button className="tile open-tile" style={{height: size, width: size, color: colorCodes[nearBugCount]}}>
            {nearBugCount}
        </button>
    const bugTemplate =
        <button className={`tile ${(isLast) ? "end-bug-tile" : "open-tile"}`}
                style={{height: size, width: size}}>
            <BugReport size="medium"/>
        </button>

    if (isBug && (activity === GAME_END || isOpen)) return bugTemplate
    return (isOpen) ? openTemplate : notOpenTemplate
}

const mapStateToProps = ({settings: {tileSize, sound}, process: {activity, remainBugs}}) => ({
    size: tileSize,
    activity, remainBugs,
    volume: sound / 100
})

const mapDispatchToProps = (dispatch) => ({
    open: (i, j) => dispatch(clickTile(i, j)),
    flag: (i, j) => dispatch(clickFlagTile(i, j))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tile);