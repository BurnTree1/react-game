import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Dialog, DialogTitle, Typography, Button, TextField} from "@material-ui/core";
import {GAME_WIN} from "Helpers";
import {addToScoreTable, modalAreShowing} from "Actions";

function WinModal({isWin, isCanShow, addToScore, disableShowingWindow}) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("Cool dude")

    useEffect(() => {
        if (isWin && isCanShow)
            setOpen(true)
    }, [isWin])

    const saveScore = () => {
        addToScore(name)
        closeWindow()
    }

    const closeWindow = () => {
        disableShowingWindow()
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={closeWindow}>
            <DialogTitle>
                <Typography variant="h5" align="center" paragraph>
                    Woooow.. you win
                </Typography>
                <Typography paragraph>
                    Dude, enter your name and I remember you
                </Typography>
                <TextField defaultValue={name} label="Name"
                           onChange={(e => setName(e.target.value))}>{name}</TextField>
                <Button size="large" color="primary" variant="outlined" style={{float: "right"}} onClick={saveScore}>
                    Save
                </Button>
            </DialogTitle>
        </Dialog>
    );
}

export default connect(
    ({process: {activity, isModalNeedShow}}) => ({
        isWin: activity === GAME_WIN,
        isCanShow: isModalNeedShow
    }),
    (dispatch => ({
        addToScore: (name) => dispatch(addToScoreTable(name)),
        disableShowingWindow: () => dispatch(modalAreShowing())
    }))
)(WinModal);