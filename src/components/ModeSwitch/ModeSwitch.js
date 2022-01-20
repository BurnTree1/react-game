import React, {useEffect, useState} from 'react';
import {Switch, IconButton} from "@material-ui/core";
import {connect} from "react-redux";
import {DARK_MODE, LIGHT_MODE} from "Helpers/index";
import {WbSunny, NightsStay} from "@material-ui/icons"
import {setMode} from "Actions/settings";

function ModeSwitch({mode, initMode}) {
    const isDarkMode = (mode === DARK_MODE)
    const [darkMode, setDarkMode] = useState(isDarkMode)

    useEffect(() => {
        setDarkMode(isDarkMode)
        document.getElementById("root").classList = mode
    }, [mode])

    return (
        <div id="mode-switcher">
            <IconButton>
                <WbSunny/>
            </IconButton>
            <Switch checked={darkMode}
                    onChange={(e, check) =>
                        initMode((check) ? DARK_MODE : LIGHT_MODE)}/>
            <IconButton>
                <NightsStay/>
            </IconButton>
        </div>
    );
}

export default connect(({settings: {mode}}) => ({mode}),
    (dispatch) => ({initMode: (mode) => dispatch(setMode(mode))}))(ModeSwitch);