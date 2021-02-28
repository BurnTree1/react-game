import React from 'react';
import {connect} from "react-redux"
import Head from "./Head/Head";
import Body from "./Body/Body";
import {Box} from "@material-ui/core";
import LoseModal from "./Modals/LoseModal";
import SaveAndLoad from "./SaveAndLoad";
import Cat from "./Cat/Cat";


function App({width}) {
    return (
        <Box m="auto" width={width}>
            <Cat/>
            <Head/>
            <Body/>
            <LoseModal/>
            <SaveAndLoad/>
        </Box>
    );
}

const mapStateToProps = ({body, settings}) => ({
    width: settings.tileSize * body.width,
})

export default connect(mapStateToProps)(App);
