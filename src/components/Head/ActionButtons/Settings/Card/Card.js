import React from 'react';
import {Typography} from "@material-ui/core";
import SliderComponent from "../Slider/Slider"

export default ({label, elements = []}) =>
    <div style={{marginTop: 30}}>
        <Typography variant="h5" align="center" paragraph>
            {label}
        </Typography>
        <div className="setting-card">
            {elements.map((element, key) => <SliderComponent element={element} key={key}/>)}
        </div>
    </div>
