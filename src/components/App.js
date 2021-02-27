import React, {useEffect, useState} from 'react';
import {connect} from "react-redux"
import Head from "./Head/Head";
import Body from "./Body/Body";
import {Box} from "@material-ui/core";
import {refreshGame} from "Actions";
import {GAME_END} from "Helpers";
import WinModal from "./Modals/WinModal";


function App({width, isWin, start}) {

    const [winOpen, setWinOpen] = useState(false);

    useEffect(() => {
        start()
    }, [])

    useEffect(() => {
        setWinOpen(isWin)
    }, [isWin])

    return (
        <Box m="auto" width={width}>
            <Head/>
            <Body/>
            <WinModal isOpen={winOpen} closeWindow={() => setWinOpen(false)}/>
        </Box>
    );
}

const mapStateToProps = ({body, settings, process: {activity}}) => ({
    width: settings.tileSize * body.width,
    isWin: activity === GAME_END
})

const mapDispatchToProps = (dispatch) => ({
    start: () => dispatch(refreshGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
