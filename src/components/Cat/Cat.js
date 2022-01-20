import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {catWait, catInProgress, catWin} from 'Assets'
import {GAME_IN_PROGRESS, GAME_WIN} from "Helpers";

function Cat({activity}) {
    const [gif, setGif] = useState(catWait)

    useEffect(() => {
        switch (activity) {
            case GAME_IN_PROGRESS:
                setGif(catInProgress);
                break;
            case GAME_WIN:
                setGif(catWin);
                break;
            default:
                setGif(catWait)
        }
    }, [activity])

    return (
        <div style={{margin: "-50px 0 0 0 "}}>
            <img className="cat" src={gif} alt="tap tap..."/>
        </div>
    );
}

export default connect(({process: {activity}}) => ({activity}))(Cat);