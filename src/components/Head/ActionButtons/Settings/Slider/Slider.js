import {Slider, Typography} from "@material-ui/core";
import React from "react";

export default({element: {label, value, onChange, displayValue = "", min = 0, max = 100}}) =>
    <div>
        <Typography variant="h5">
            {label}
        </Typography>
        <Typography variant="h6" align="right">
            {displayValue}
        </Typography>
        <Slider value={value}
                onChange={(event, newValue) => onChange(newValue)}
                min={min}
                max={max}
                aria-labelledby="continuous-slider"/>
    </div>
