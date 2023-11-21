const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');

const input = document.getElementById('input');

const convertBtn = document.getElementById('convert');

const meterToFeet = 3.28084;
const literToGallon = 0.264172;
const kilogramToPound = 2.20462;

const convert = (val, multiplier) => {
    return val * multiplier;
}

const fillSingle = (val, from, to, multiplier) => {
    const result1 = convert(val, multiplier).toFixed(3);
    const result2 = convert(val, 1 / multiplier).toFixed(3);

    return `${val} ${from} = ${result1} ${to} | ${val} ${to} = ${result2} ${from}`
}

const filler = (val1, val2, val3) => {
    value1.innerHTML = val1;
    value2.innerHTML = val2;
    value3.innerHTML = val3;
}

convertBtn.addEventListener('click', () => {
    const val = Number(input.value);

    const meterToFeetResult = fillSingle(val, 'meter', 'feet', meterToFeet);
    const literToGallonResult = fillSingle(val, 'liter', 'gallon', literToGallon);
    const kilogramToPoundResult = fillSingle(val, 'kilogram', 'pound', kilogramToPound);

    filler(meterToFeetResult, literToGallonResult, kilogramToPoundResult);
})

