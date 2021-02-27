import React from 'react';
import { IconButton} from "@material-ui/core";
import {Equalizer, Settings, SettingsBackupRestore} from "@material-ui/icons";
import {connect} from "react-redux";
import {refreshGame} from "Actions";

function ActionButtons({start}) {
    return (
        <div>
            <IconButton onClick={() => start()}>
                <SettingsBackupRestore/>
            </IconButton>
            <IconButton>
                <Equalizer/>
            </IconButton>
            <IconButton>
                <Settings/>
            </IconButton>
        </div>
    );
}

export default connect(null, (dispatch) => ({start: () => dispatch(refreshGame())}))(ActionButtons);