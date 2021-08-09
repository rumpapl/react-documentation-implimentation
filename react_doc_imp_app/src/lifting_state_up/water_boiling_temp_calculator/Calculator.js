import React from 'react';
import TemperatureInput from './TemperatureInput';
import BoilingVerdict from './BoilingVerdict';

const Calculator = () => {

    const [scale, setScale] = React.useState('c');
    const [temperature, setTemperature] = React.useState('');

    function handleCelsiusChange(temperature) {
        setTemperature(temperature);
        setScale('c');
    }

    function handleFahrenheitChange(temperature) {
        setTemperature(temperature);
        setScale('f');
    }

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    let boilingVerdict = parseFloat(celsius) ?
        <BoilingVerdict celsius={parseFloat(celsius)} />
        :
        null;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />

            {boilingVerdict}
        </div>
    )
}

export default Calculator
