import React, {useState} from 'react';
import {
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Container
} from "@material-ui/core";
import {Equalizer, Close} from "@material-ui/icons";

function Score() {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <div>
            <IconButton onClick={openModal}>
                <Equalizer/>
            </IconButton>
            <Dialog open={open} onClose={closeModal} fullWidth maxWidth={"sm"}>
                <DialogTitle>
                    <div>
                        <Typography variant="h3" align="center">
                            Score
                        </Typography>
                        <IconButton aria-label="close" onClick={closeModal}>
                            <Close/>
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Container>
                        <Typography variant="h3">
                            1: 102 sec 20B 30x40
                        </Typography>
                        <Typography variant="h3">
                            2: 102 sec 20B 30x40
                        </Typography>
                        <Typography variant="h3">
                            3: 102 sec 20B 30x40
                        </Typography>
                    </Container>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Score;