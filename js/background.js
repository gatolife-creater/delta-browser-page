let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.style("z-index", "-1");
    stars = new Stars();
    stars.s(150);
}

function draw() {
    stars.d(150);

    // fib.fibD(200);
    // if (fib.resize > fib.max) {
    //     fib.magnify_flag = true;
    // } else if (fib.resize < fib.min) {
    //     fib.magnify_flag = false;
    // }


}

function mouseWheel(event) {
    // fib.resize -= event.delta / 500 * fib.resize;
}

function windowResized() {
    canvas = resizeCanvas(windowWidth, windowHeight, WEBGL);
}
