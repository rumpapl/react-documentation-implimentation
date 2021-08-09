import React from 'react'

const TemperatureInput = (props) => {

    function handleChange(e) {
        props.onTemperatureChange(e.target.value);
    }

    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
            <input value={props.temperature}
                onChange={handleChange} />
        </fieldset>
    )
}

export default TemperatureInput
