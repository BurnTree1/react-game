import React from 'react';
import {IconButton, Grid} from "@material-ui/core";
import {SettingsBackupRestore} from "@material-ui/icons";
import {connect} from "react-redux";
import {refreshGame} from "Actions";
import Score from "./Score/Score";
import Settings from "./Settings/Settings";
import useSound from "use-sound";
import {soundButton} from "Assets"

function ActionButtons({volume, startGame}) {
    const [clickSoundPlay] = useSound(soundButton, {volume: volume* 0.3})

    const refresh = () => {
        startGame()
        clickSoundPlay()
    }

    return (
        <Grid container alignItems="center" style={{height: "100%"}}>
            <Grid item xs>
                <IconButton onClick={refresh}>
                    <SettingsBackupRestore/>
                </IconButton>
            </Grid>
            <Grid item xs>
                <Score/>
            </Grid>
            <Grid item xs>
                <Settings/>
            </Grid>
        </Grid>
    );
}

export default connect(({settings: {sound}})=> ({volume: sound/100}),
    (dispatch) => ({startGame: () => dispatch(refreshGame())}))(ActionButtons);