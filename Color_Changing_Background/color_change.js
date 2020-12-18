function changeColor() {
    console.log("clicked");
    document.body.style.backgroundColor =
    'rgb('+ Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255)+ ')';
}