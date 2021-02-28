import React, {useEffect, useRef, useState} from 'react';
import {Dialog} from "@material-ui/core";
import boom from "Assets/boom.mp4";
import {GAME_END} from "Helpers/index";
import {connect} from "react-redux";

function LoseModal({isWin}) {
    const [open, setOpen] = useState(false);
    const video = useRef()

    useEffect(() => {
        setOpen(isWin)
    }, [isWin])

    const setVolume = () =>
        document.getElementById('lose_video').volume = 0.2

    return (
        <Dialog open={open} fullWidth>
            <video ref={video} id="lose_video" onLoadStart={setVolume}
                   autoPlay muted onEnded={() => setOpen(false)}>>
                <source src={boom} type="video/mp4"/>
            </video>
        </Dialog>
    );
}

export default connect(({process: {activity}}) => ({isWin: activity === GAME_END}))(LoseModal);