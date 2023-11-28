img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center
}
function preload() {
img = loadImage('table.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("", 45, 75 );
    noFill();
    stroke("#FF0000")
    rect(45, 55 , 450, 365);

    
    
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

