import React, {useEffect, useState} from 'react';
import wait from 'Assets/wait.gif'
import win from 'Assets/win.gif'
import inProgress from 'Assets/in_progress.gif'
import {connect} from "react-redux";
import {GAME_IN_PROGRESS, GAME_WIN} from "Helpers/index";

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
        <div>
            <img src={gif} height="200" width="200" alt="tap tap..."/>
        </div>
    );
}

export default connect(({process: {activity}}) => ({activity}))(Cat);