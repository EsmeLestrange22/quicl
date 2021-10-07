function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(280, 280);
    background(bc)
    canvas.position(600, 410)
    canvas.mouseReleased(classifyCanvas)
    synth = window.speechSynthesis;
}

function draw() {
    
   
stroke(tc)
    strokeWeight(10);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
      
    }
}

function cc() {
    background("aqua");
}
function done() {
    tc= document.getElementById("tc").value;
    bc= document.getElementById("bc").value;
}