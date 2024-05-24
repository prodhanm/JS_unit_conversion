function tempConversion () {
    const c = document.getElementById("celcius").value;
    const f = (c * 9/5) + 32;
    document.getElementById("farenheit").value = f.toFixed(2);
}


function weightConversion () {
    const kg = document.getElementById("kg").value;
    const lbs = pounds = kg * 2.20462;
    document.getElementById("lbs").value = lbs.toFixed(2);
}

function distanceConversion () {
    const km = document.getElementById("km").value;
    const mi = km * 0.621371;
    document.getElementById("mi").value = mi.toFixed(2);
}