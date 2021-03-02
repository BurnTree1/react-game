import React, {useState} from 'react';
import {connect} from "react-redux";
import {
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings"
import {initSettings} from "Actions";
import {difficultyName} from "Helpers";
import CardComponent from "./Card/Card"

function Settings({settings, saveSettings}) {
    const [open, setOpen] = useState(false)

    const [music, setMusic] = useState(0)
    const [sound, setSound] = useState(0)
    const [size, setSize] = useState(0)
    const [difficulty, setDifficulty] = useState(0)
    const [tileSize, setTileSize] = useState(0)

    const openModal = () => {
        setSize(settings.size)
        setDifficulty(settings.difficulty)
        setSound(settings.sound)
        setMusic(settings.music)
        setTileSize(settings.tileSize)
        setOpen(true)
    }

    const closeModal = () => setOpen(false)

    const save = () => {
        saveSettings({size, difficulty, music, sound, tileSize})
        closeModal()
    }

    return (
        <div>
            <IconButton onClick={openModal}>
                <SettingsIcon/>
            </IconButton>
            <Dialog open={open} onClose={closeModal} fullWidth maxWidth={"sm"}>
                <Container>
                    <DialogContent>
                        <CardComponent label="Game process" elements={[
                            {
                                label: "Difficulty:",
                                displayValue: difficultyName[difficulty],
                                value: difficulty,
                                min: 1,
                                max: 6,
                                onChange: setDifficulty
                            },
                            {
                                label: "Size:",
                                displayValue: `${size}x${size}`,
                                value: size,
                                min: 10,
                                max: 20,
                                onChange: setSize
                            },
                            {
                                label: "Tile size:",
                                displayValue: `${tileSize} px`,
                                min: 30,
                                max: 60,
                                value: tileSize,
                                onChange: setTileSize
                            }
                        ]}/>
                        <CardComponent label="Volume" elements={[
                            {
                                label: "Music:",
                                displayValue: `${music}%`,
                                value: music,
                                onChange: setMusic
                            },
                            {
                                label: "Sound:",
                                displayValue: `${sound}%`,
                                value: sound,
                                onChange: setSound
                            }
                        ]}/>
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