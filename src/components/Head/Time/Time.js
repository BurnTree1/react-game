import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {setTime} from "Actions";
import {GAME_IN_PROGRESS, GAME_READY, timeToMinutes} from "Helpers";

function Time({activity, time, putTime}) {

    useEffect(() => {
        let timer = null;
        if (activity === GAME_READY)
            putTime(0)
        if (activity === GAME_IN_PROGRESS)
            timer = setTimeout(() => putTime(time + 1), 1000);
        return () => clearTimeout(timer);
    }, [time, activity])

    return (
        <div className="timer">
            <h1>{timeToMinutes(time)}</h1>
        </div>
    );
}

const mapStateToProps = ({process: {activity, time}}) => ({
        activity, time
    })

const mapDispatchToProps = (dispatch) => ({
    putTime: (time) => dispatch(setTime(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(Time);