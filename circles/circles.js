function radius() {
    let radius = document.getElementById('in_radius').value;
    document.getElementById('in_diameter').style.display = "none";
    document.getElementById('in_radius').style.display = "none";
    document.getElementById('out_radius').innerHTML = "The radius of the circle is " + radius + "cm";
    let diameter = radius * 2;
    document.getElementById('out_diameter').innerHTML = "The diameter of the circle is " + diameter + "cm";
    let circ = (2 * Math.PI) * radius;
    document.getElementById('out_circ').innerHTML = "The circumference of the circle is " + circ.toFixed(
        2) + " cm";
    let area = Math.PI * (radius * radius);
    let squared = "2";
    document.getElementById("out_area").innerHTML = "The area of the circle is " + area.toFixed(2) +
        " cm" + squared.sup();
}

function diameter() {
    let diameter = document.getElementById('in_diameter').value;
    document.getElementById('in_diameter').style.display = "none";
    document.getElementById('in_radius').style.display = "none";
    let radius = diameter / 2;
    document.getElementById('out_radius').innerHTML = "The radius of the circle is " + radius + "cm";
    document.getElementById('out_diameter').innerHTML = "The diameter of the circle is " + diameter + "cm";
    let circ = (2 * Math.PI) * radius;
    document.getElementById('out_circ').innerHTML = "The circumference of the circle is " + circ.toFixed(
        2) + " cm";
    let area = Math.PI * (radius * radius);
    let squared = "2";
    document.getElementById("out_area").innerHTML = "The area of the circle is " + area.toFixed(2) +
        " cm" + squared.sup();
}

function btn_reset() {
    document.getElementById('form').reset();
    document.getElementById('in_radius').style.display = "inline-block";
    document.getElementById('in_diameter').style.display = "inline-block";
    document.getElementById('out_radius').innerHTML = " ";
    document.getElementById('out_diameter').innerHTML = " ";
    document.getElementById('out_circ').innerHTML = " ";
    document.getElementById('out_area').innerHTML = " ";
}