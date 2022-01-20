import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {Dialog} from "@material-ui/core";
import {videoGameOver} from "Assets";
import {GAME_END} from "Helpers";
import {modalAreShowing} from "Actions";

function LoseModal({isEnd, isCanShow, volume, disableShowingWindow}) {
    const [open, setOpen] = useState(false);
    const video = useRef()

    useEffect(() => {
        if (isEnd && isCanShow)
            setOpen(true)
    }, [isEnd])

    const closeWindow = () => {
        disableShowingWindow()
        setOpen(false)
    }

    const setVolume = () =>
        document.getElementById('lose_video').volume = 0.5 * volume

    return (
        <Dialog open={open} fullWidth onClose={closeWindow}>
            <video ref={video} id="lose_video" onLoadStart={setVolume}
                   autoPlay onEnded={closeWindow}>>
                <source src={videoGameOver} type="video/mp4"/>
            </video>
        </Dialog>
    );
}

const mapStateToProps = ({process: {activity, isModalNeedShow}, settings: {sound}}) => ({
    isEnd: activity === GAME_END,
    volume: sound / 100,
    isCanShow: isModalNeedShow
})

const mapDispatchToProps = dispatch => ({
    disableShowingWindow: () => dispatch(modalAreShowing())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoseModal);