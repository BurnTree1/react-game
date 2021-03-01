import React from 'react';
import {connect} from "react-redux"
import Head from "./Head/Head";
import Body from "./Body/Body";
import {Box} from "@material-ui/core";
import LoseModal from "./Modals/LoseModal";
import SaveAndLoad from "./SaveAndLoad";
import Cat from "./Cat/Cat";
import MusicPlayer from "./MusicPlayer/MusicPlayer";


function App({width}) {
    return (
        <Box m="auto" width={width}>
            <Cat/>
            <Head/>
            <Body/>
            <LoseModal/>
            <SaveAndLoad/>
            <MusicPlayer/>
        </Box>
    );
}

const mapStateToProps = ({body, settings}) => ({
    width: settings.tileSize * body.width,
})

export default connect(mapStateToProps)(App);
