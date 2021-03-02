import React from 'react';
import {connect} from "react-redux"
import Head from "./Head/Head";
import Body from "./Body/Body";
import {Box} from "@material-ui/core";
import SaveAndLoad from "./SaveAndLoad/SaveAndLoad";
import Cat from "./Cat/Cat";
import MusicPlayer from "./MusicPlayer/MusicPlayer";
import {WinModal, LoseModal} from "./Modals";
import ModeSwitch from "./ModeSwitch/ModeSwitch";

function App({width}) {
    return (
        <div>
            <Box m="auto" width={width}>
                <Cat/>
                <Head/>
                <Body/>
            </Box>
            <LoseModal/>
            <WinModal/>
            <SaveAndLoad/>
            <ModeSwitch/>
            <MusicPlayer/>
        </div>
    );
}

const mapStateToProps = ({body, settings}) => ({
    width: settings.tileSize * body.width,
})

export default connect(mapStateToProps)(App);
