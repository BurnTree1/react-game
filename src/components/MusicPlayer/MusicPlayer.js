import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import useSound from "use-sound";
import {Pause, PlayArrow, SkipNext} from "@material-ui/icons"
import {IconButton} from "@material-ui/core"
import {music1, music2, music3, music4, music5, music6, music7} from "Assets";

function MusicPlayer({volume}) {
    const [musicLibrary] = useState([music1, music2, music3, music4, music5, music6, music7])
    const getRandomMusic = () =>
        musicLibrary[Math.floor(Math.random() * (musicLibrary.length))]

    const [musicVolume, setMusicVolume] = React.useState(volume);
    const [music, setMusic] = useState(getRandomMusic())
    const [playMusic, {pause, isPlaying, stop}] = useSound(music, {volume: musicVolume})

    useEffect(() => {
        setMusicVolume(volume)
    }, [volume])

    const onClick = () =>
        (isPlaying) ? pause() : playMusic()

    const next = () => {
        stop()
        setMusic(getRandomMusic())
    }

    return (
        <div id="player">
            <IconButton onClick={onClick} color="inherit">
                {(isPlaying) ? <Pause/> : <PlayArrow/>}
            </IconButton>
            <IconButton onClick={next} color="inherit">
                <SkipNext/>
            </IconButton>
        </div>
    );
}

export default connect(({settings: {music}}) => ({volume: music / 100}))(MusicPlayer);