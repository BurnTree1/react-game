import React from 'react';
import {connect} from "react-redux";
import {Grid} from "@material-ui/core";
import ActionButtons from "./ActionButtons/ActionButtons";
import Info from "./Info/Info";
import Cat from "./Cat/Cat";

function Head({start}) {
    return (
        <div>
            <Grid container>
                <Grid item xs>
                    <Info/>
                </Grid>
                <Grid item xs>
                    <Cat/>
                </Grid>
                <Grid item xs>
                    <ActionButtons/>
                </Grid>
            </Grid>
        </div>
    );
}

export default connect()(Head);