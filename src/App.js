import React from 'react';
import {connect} from "react-redux"
import {musicOff} from 'Actions';
import gif from './images/taptap.gif'
function App({music, musicOff}) {
  return (
    <div>
      Musics 1: {music}
      <button onClick={musicOff}>
          click me
      </button>
        <img src={gif} alt="tap tap..."/>
    </div>
  );
}

export default connect(
    ({settings}) => ({music: settings.music}),
    (dispatch) => ({musicOff: ()=> dispatch(musicOff())})
)(App);
