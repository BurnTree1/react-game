import React from 'react';
import {Dialog} from "@material-ui/core";
import boom from "Assets/boom.mp4";

function WinModal({isOpen, closeWindow}) {
    return (
        <Dialog open={isOpen} fullWidth>
            <video id="lose_video" autoPlay muted onEnded={closeWindow}>
                <source src={boom} type="video/mp4"/>
            </video>
        </Dialog>
    );
}

export default WinModal;