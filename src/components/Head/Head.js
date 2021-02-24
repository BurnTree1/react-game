import React from 'react';
import {connect} from "react-redux";
import {initBody} from "Actions/body";
import {Grid, IconButton} from "@material-ui/core";
import {Equalizer, Settings, SettingsBackupRestore} from '@material-ui/icons';

function Head({start}) {
    return (
        <div>
            <Grid container>
                <Grid item xs>
                    <button onClick={() => start()}>
                        Start
                    </button>
                </Grid>
                <Grid item xs>
                    {/*<img src={gif} width={100} height={100} alt="tap tap..."/>*/}
                </Grid>
                <Grid item xs>
                    <IconButton onClick={() => start()}>
                        <SettingsBackupRestore/>
                    </IconButton>
                    <IconButton>
                        <Equalizer/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    );
}

export default connect(
    (state) => ({}),
    (dispatch) => ({start: () => dispatch(initBody())}))(Head);