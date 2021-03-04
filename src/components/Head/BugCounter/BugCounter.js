import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {gameWin} from "Actions";
import {BugReport} from "@material-ui/icons";

function BugCounter({bugs, isWin, setWin}) {

    useEffect(() => {
        if (isWin) setWin()
    }, [isWin])

    return (
        <h1 className="bug-counter">
            <span><BugReport size="medium"/> {bugs}</span>
        </h1>
    );
}

const mapStateToProps = ({body: {field, bugs}}) => {
    let remainBugs = bugs;
    let countClosed = 0;
    field.forEach(
        array => array.forEach(
            element => {
                if (element.isFlag) remainBugs--
                if (!element.isOpen)
                    countClosed++
            }
        )
    )

    return {
        bugs: remainBugs,
        isWin: countClosed === bugs,
    }
}

const mapDispatchToProps = (dispatch) => ({
    setWin: () => dispatch(gameWin())
})

export default connect(mapStateToProps, mapDispatchToProps)(BugCounter);