import React, {useEffect, useState} from 'react';
import wait from 'Assets/wait.gif'
import win from 'Assets/win.gif'
import inProgress from 'Assets/in_progress.gif'
import {connect} from "react-redux";
import {GAME_IN_PROGRESS, GAME_WIN} from "Helpers";

function Cat({activity}) {
    const [gif, setGif] = useState(wait)

    useEffect(() => {
        switch (activity) {
            case GAME_IN_PROGRESS:
                setGif(inProgress);
                break;
            case GAME_WIN:
                setGif(win);
                break;
            default:
                setGif(wait)
        }
    }, [activity])

    return (
        <div style={{margin: "-50px 0 0 0 "}}>
            <img className="cat" src={gif} alt="tap tap..."/>
        </div>
    );
}

export default connect(({process: {activity}}) => ({activity}))(Cat);