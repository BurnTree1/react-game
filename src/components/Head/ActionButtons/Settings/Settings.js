import React, {useState} from 'react';
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slider,
    Typography
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings"
import {connect} from "react-redux";
import {initSettings} from "Actions";

const SliderComponent = ({label, value, onChange, min = 0, max = 100}) =>
    <div>
        <Typography variant="h5">
            {label}
        </Typography>
        <Slider value={value}
                onChange={(event, newValue) => onChange(newValue)}
                min={min}
                max={max}
                aria-labelledby="continuous-slider"/>
    </div>

function Settings({settings, saveSettings}) {
    const [open, setOpen] = useState(false)
    const [music, setMusic] = useState(0)
    const [sound, setSound] = useState(0)
    const [size, setSize] = useState(0)
    const [difficulty, setDifficulty] = useState(0)
    // TODO need settings tile size?

    const openModal = () => {
        setSize(settings.size)
        setDifficulty(settings.difficulty)
        setOpen(true)
    }
    const closeModal = () => setOpen(false)

    const save = () => {
        saveSettings({size, difficulty})
        closeModal()
    }

    return (
        <div>
            <IconButton onClick={openModal}>
                <SettingsIcon/>
            </IconButton>
            <Dialog open={open} onClose={closeModal} fullWidth maxWidth={"sm"}>
                <DialogTitle>
                    <Typography variant="h3" align="center">
                        Settings
                    </Typography>
                </DialogTitle>

                <Container>
                    <DialogContent>
                        <SliderComponent label="Difficulty"
                                         value={difficulty}
                                         min={5}
                                         max={30}
                                         onChange={setDifficulty}/>
                        <SliderComponent label="Size"
                                         value={size}
                                         min={10}
                                         max={20}
                                         onChange={setSize}/>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={closeModal} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={save} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Container>
            </Dialog>
        </div>
    );
}

const mapStateToProps = ({settings}) => ({settings})

const mapDispatchToProps = (dispatch) => ({
    saveSettings: (settings) => dispatch(initSettings(settings))
})


export default connect(mapStateToProps, mapDispatchToProps)(Settings);