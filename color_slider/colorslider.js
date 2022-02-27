function getRGB() {
    let red = document.getElementById("red_slider").value;
    let green = document.getElementById("green_slider").value;
    let blue = document.getElementById("blue_slider").value;
    let rgb = (red + "," + green + "," + blue);
    document.getElementById("rgb_value").innerHTML = rgb;
    document.body.style.backgroundColor = 'rgb(' + rgb + ')';
}