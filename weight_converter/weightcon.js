function calculation() {
    let inputvalue = document.getElementById("inputvalue").value;
    let inputunit = document.getElementById("inputunit").value;
    let outputunit = document.getElementById("outputunit").value;

    if (inputunit == "lbs" && outputunit == "lbs") {
        outputvalue = inputvalue;
    }
    else if(inputunit == "lbs" && outputunit == "kgs") {
        outputvalue = (inputvalue / 2.205).toFixed(3);
    }
    else if(inputunit == "kgs" && outputunit == "lbs") {
        outputvalue = (inputvalue * 2.205).toFixed(0);
    }
    else if(inputunit == "kgs" && outputunit == "kgs") {
        outputvalue = inputvalue;
    }
    document.getElementById("outputvalue").value = outputvalue;
    return outputvalue;
}