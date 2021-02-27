import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {gameWin, setTime} from "Actions";
import {GAME_IN_PROGRESS, GAME_READY, timeToMinutes} from "Helpers";

function Info({activity, bugs, isWin, setWin, putTime}) {

    const [second, setSecond] = useState(0)

    useEffect(() => {
        let timer = null;
        if (activity === GAME_READY)
            setSecond(0)
        if (activity === GAME_IN_PROGRESS) {
            putTime(second);
            timer = setTimeout(() => setSecond(second + 1)
            , 1000);
        }
        return () => clearTimeout(timer);
    }, [second, activity])

    useEffect(() => {
        if(isWin) setWin()
    }, [isWin])

    return (
        <div>
            <h1>{timeToMinutes(second)}</h1>
            <h1>{bugs}</h1>
        </div>
    );
}

const mapStateToProps = ({body: {field, bugs}, process: {activity}}) => {
    let remainBugs = bugs;
    let countClosed = 0;
    field.forEach(
        array => array.forEach(
            element => {
                if (element.isFlag) remainBugs--
                if (!element.isOpen)
                    countClosed++
            }
        )
    )

    return {activity, bugs: remainBugs, isWin: countClosed === bugs}
}

const mapDispatchToProps = (dispatch) => ({
        setWin: () => dispatch(gameWin()),
        putTime: (time) => dispatch(setTime(time))
    })

export default connect(mapStateToProps, mapDispatchToProps)(Info);