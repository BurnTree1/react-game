import React, {useEffect} from 'react';
import {connect} from "react-redux"
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";
import {Box} from "@material-ui/core";
import {refreshGame} from "Actions/process";


function App({width, start}) {

    useEffect(() => {
        start()
    }, [])

    return (
        <Box m="auto" width={width}>
            <Head/>
            <Body/>
        </Box>
    );
}

export default connect(
    ({body, settings}) => ({width: settings.tileSize * body.width}),
    (dispatch) => ({start: () => dispatch(refreshGame())})
)(App);
