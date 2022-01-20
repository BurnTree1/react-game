import React from 'react';
import {Grid} from "@material-ui/core";
import ActionButtons from "./ActionButtons/ActionButtons";
import BugCounter from "./BugCounter/BugCounter";
import Time from "./Time/Time";

function Head() {
    return (
        <div className="head">
            <Grid container>
                <Grid item xs>
                    <BugCounter/>
                </Grid>
                <Grid item xs>
                    <Time/>
                </Grid>
                <Grid item xs>
                    <ActionButtons/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Head;