function calculation() {
    // console.log("Changed");
    let inputvalue = document.getElementById("inputvalue").value;
    let inputunit = document.getElementById("inputunit").value;
    let outputunit = document.getElementById("outputunit").value;
    // console.log(inputvalue);
    // console.log(inputunit);
    // console.log(outputunit);

    if (inputunit == "lbs" && outputunit == "lbs") {
        outputvalue = inputvalue;
        document.getElementById("outputvalue").value = outputvalue;
        return outputvalue;
    }
    else if(inputunit == "lbs" && outputunit == "kgs") {
        outputvalue = (inputvalue / 2.205).toFixed(3);
        document.getElementById("outputvalue").value = outputvalue;
        return outputvalue;
    }
    else if(inputunit == "kgs" && outputunit == "lbs") {
        outputvalue = (inputvalue * 2.205).toFixed(3);
        document.getElementById("outputvalue").value = outputvalue;
        return outputvalue;
    }
    else if(inputunit == "kgs" && outputunit == "kgs") {
        let outputvalue = inputvalue;
        document.getElementById("outputvalue").value = outputvalue;
        return outputvalue;
    }


}