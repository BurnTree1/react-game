import React, {useEffect, useRef, useState} from 'react';
import {Dialog} from "@material-ui/core";
import {videoGameOver} from "Assets";
import {GAME_END} from "Helpers/index";
import {connect} from "react-redux";

function LoseModal({isEnd, volume}) {
    const [open, setOpen] = useState(false);
    const video = useRef()

    useEffect(() => {setOpen(false)},[])

    useEffect(() => {setOpen(isEnd)}, [isEnd])

    const setVolume = () =>
        document.getElementById('lose_video').volume = 0.5 * volume

    return (
        <Dialog open={open} fullWidth>
            <video ref={video} id="lose_video" onLoadStart={setVolume}
                   autoPlay onEnded={() => setOpen(false)}>>
                <source src={videoGameOver} type="video/mp4"/>
            </video>
        </Dialog>
    );
}

export default connect(
    ({process: {activity}, settings: {sound}}) =>
        ({isEnd: activity === GAME_END, volume: sound/100}))
(LoseModal);