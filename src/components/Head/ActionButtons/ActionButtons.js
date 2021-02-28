import React from 'react';
import {IconButton, Grid} from "@material-ui/core";
import {SettingsBackupRestore} from "@material-ui/icons";
import {connect} from "react-redux";
import {refreshGame} from "Actions";
import Score from "./Score/Score";
import Settings from "./Settings/Settings";

function ActionButtons({start}) {
    return (
        <Grid container alignItems="center" style={{height: "100%"}}>
            <Grid item xs>
                <IconButton onClick={() => start()}>
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

export default connect(null, (dispatch) => ({start: () => dispatch(refreshGame())}))(ActionButtons);