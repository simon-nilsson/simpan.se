function BinaryInput() {
    var value = document.getElementById("binvalue");
    document.getElementById("binreturn").innerHTML = "Binary " + value.value;
    document.getElementById("decreturn").innerHTML = "Decimal " + value.value;
    document.getElementById("hexreturn").innerHTML = "Hex " + value.value;
    document.getElementById("octreturn").innerHTML = "Octal " + value.value;
}

function DecimalInput() {
    var value = document.getElementById("decvalue");
    document.getElementById("binreturn").innerHTML = "Binary " + value.value;
    document.getElementById("decreturn").innerHTML = "Decimal " + value.value;
    document.getElementById("hexreturn").innerHTML = "Hex " + value.value;
    document.getElementById("octreturn").innerHTML = "Octal " + value.value;
}

function HexInput() {
    var value = document.getElementById("hexvalue");
    document.getElementById("binreturn").innerHTML = "Binary " + value.value;
    document.getElementById("decreturn").innerHTML = "Decimal " + value.value;
    document.getElementById("hexreturn").innerHTML = "Hex " + value.value;
    document.getElementById("octreturn").innerHTML = "Octal " + value.value;
}

function OctalInput() {
    var value = document.getElementById("octvalue");
    document.getElementById("binreturn").innerHTML = "Binary " + value.value;
    document.getElementById("decreturn").innerHTML = "Decimal " + value.value;
    document.getElementById("hexreturn").innerHTML = "Hex " + value.value;
    document.getElementById("octreturn").innerHTML = "Octal " + value.value;
}

function decimalToHex(d) {
    var hex = Number(d).toString(16);
    hex = "000000".substr(0, 6 - hex.length) + hex;
    return hex;
}


document.getElementById("binbutton").onclick = BinaryInput;
document.getElementById("decbutton").onclick = DecimalInput;
document.getElementById("hexbutton").onclick = HexInput;
document.getElementById("octbutton").onclick = OctalInput;