import React, {useState} from 'react';
import {connect} from "react-redux";
import {Dialog, IconButton} from "@material-ui/core";
import {Equalizer} from "@material-ui/icons";
import {DataGrid} from '@material-ui/data-grid';
import {timeToMinutes, difficultyName} from "Helpers";

const columns = [
    {field: 'id', headerName: ' ', width: 50},
    {field: 'name', headerName: 'Name', width: 170},
    {field: 'difficulty', headerName: 'Difficulty', width: 170, valueGetter: ({row}) => difficultyName[row.difficulty]},
    {field: 'time', headerName: 'Time', valueGetter: ({row}) => timeToMinutes(row.time)},
    {field: 'size', headerName: 'Size'},
]

function Score({score, mode}) {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <div>
            <IconButton onClick={openModal}>
                <Equalizer/>
            </IconButton>
            <Dialog className={mode} open={open} onClose={closeModal} fullWidth maxWidth={"sm"}>
                <DataGrid rows={score} columns={columns} pageSize={5} autoHeight disableColumnMenu disableSelectionOnClick/>
            </Dialog>
        </div>
    );
}

export default connect(({process: {score}, settings: {mode}}) => ({score, mode}))(Score);