function tempConversion () {
    var c = document.getElementById("celcius").value;
    var f = farenheitTemp = (c * 9/5) + 32;
    document.getElementById("farenheit").value = f;
}

function weightConversion () {
    var kg = document.getElementById("kg").value;
    var lbs = pounds = kg * 2.20462;
    document.getElementById("lbs").value = lbs;
}

function distanceConversion () {
    var km = document.getElementById("km").value;
    var mi = km * 0.621371;
    document.getElementById("mi").value = mi;
}