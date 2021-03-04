import React, {Fragment, useEffect} from 'react';
import {generateBody, initProcess, initSettings, refreshGame} from "Actions";
import {connect} from "react-redux";

function SaveAndLoad({body, settings, process, start, saveBody, saveProcess, saveSettings}) {

    useEffect(() => {
        const loadedBody = localStorage.getItem("body")
        const loadedProcess = localStorage.getItem("process")
        const loadedSettings = localStorage.getItem("settings")

        if (loadedBody) saveBody(JSON.parse(loadedBody))
        else start()
        if (loadedProcess) saveProcess(JSON.parse(loadedProcess))
        if (loadedSettings) saveSettings(JSON.parse(loadedSettings))
    }, [])


    useEffect(() => {
        localStorage.setItem("body", JSON.stringify(body))
    }, [body])

    useEffect(() => {
        localStorage.setItem("process", JSON.stringify(process))
    }, [process])

    useEffect(() => {
        localStorage.setItem("settings", JSON.stringify(settings))
    }, [settings])

    return (<Fragment/>);
}

const mapStateToProps = ({body, settings, process}) => ({
    body, settings, process
})

const mapDispatchToProps = (dispatch) => ({
    start: () => dispatch(refreshGame()),
    saveBody: (body) => dispatch(generateBody(body)),
    saveProcess: (process) => dispatch(initProcess(process)),
    saveSettings: (settings) => dispatch(initSettings(settings)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveAndLoad);
