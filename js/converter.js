function BinaryInput() {
    var value = document.getElementById("inputvalue");
    document.getElementById("returndata").innerHTML = "Binary " + value.value;
}

function DecimalInput() {
    var value = document.getElementById("inputvalue");
    document.getElementById("returndata").innerHTML = "Decimal " + value.value;
}

function HexInput() {
    var value = document.getElementById("inputvalue");
    document.getElementById("returndata").innerHTML = "Hex " + value.value;
}

function OctalInput() {
    var value = document.getElementById("inputvalue");
    document.getElementById("returndata").innerHTML = "Octal " + value.value;
}


document.getElementById("binbutton").onclick = BinaryInput;
document.getElementById("decbutton").onclick = DecimalInput;
document.getElementById("hexbutton").onclick = HexInput;
document.getElementById("octbutton").onclick = OctalInput;

