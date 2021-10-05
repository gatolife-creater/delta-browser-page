class Fib {
    constructor() {
        this.number = [];
        this.x = [];
        this.y = [];
        this.col = [];

        this.arcX = [];
        this.arcY = [];
        this.arcSize = [];
        this.start_arc = [];
        this.stop_arc = [];

        this.resize;
        this.max = 20;
        this.min = 5.108805640138665e-16;
        this.magnify_flag = true;
    }

    fibS(n) {
        rectMode(CENTER);
        this.resize = 100;
        for (var i = 0; i < n; i++) {
            if (i <= 1) {
                this.number[0] = 0;
                this.number[1] = 1;
            }

            if (i > 1) {
                this.number[i] = (this.number[i - 2]) + (this.number[i - 1]);
            }

            switch (i % 4) {
                case 0: //左or零番目
                    if (i == 0) {
                        this.x[0] = 0;
                        this.y[0] = 0;
                        this.col[i] = 150;
                    } else {
                        this.x[i] = this.x[i - 1] - (this.number[i] + this.number[i - 1]) / 2;
                        this.y[i] = this.y[i - 1] + (this.number[i] - this.number[i - 1]) / 2;
                        this.col[i] = 150;
                        this.arcX[i] = this.x[i] + this.number[i] / 2;
                        this.arcY[i] = this.y[i] + this.number[i] / 2;
                        this.start_arc[i] = PI;
                        this.stop_arc[i] = PI + HALF_PI;
                    }
                    break;

                case 1: //下or基準
                    if (i == 1) {
                        this.x[1] = 0;
                        this.y[1] = 0; //<---
                        this.col[i] = 175;
                        this.arcX[i] = this.x[i] + this.number[i] / 2;
                        this.arcY[i] = this.y[i] - this.number[i] / 2;
                        this.start_arc[i] = HALF_PI;
                        this.stop_arc[i] = PI;
                    } else {
                        this.x[i] = this.x[i - 1] + (this.number[i] - this.number[i - 1]) / 2;
                        this.y[i] = this.y[i - 1] + (this.number[i] + this.number[i - 1]) / 2;
                        this.col[i] = 175;
                        this.arcX[i] = this.x[i] + this.number[i] / 2;
                        this.arcY[i] = this.y[i] - this.number[i] / 2;
                        this.start_arc[i] = HALF_PI;
                        this.stop_arc[i] = PI;
                    }
                    break;

                case 2: //右
                    this.x[i] = this.x[i - 1] + (this.number[i] + this.number[i - 1]) / 2;
                    this.y[i] = this.y[i - 1] - (this.number[i] - this.number[i - 1]) / 2;
                    this.col[i] = 200;
                    this.arcX[i] = this.x[i] - this.number[i] / 2;
                    this.arcY[i] = this.y[i] - this.number[i] / 2;
                    this.start_arc[i] = 0;
                    this.stop_arc[i] = HALF_PI;
                    break;

                case 3: //上
                    this.x[i] = this.x[i - 1] - (this.number[i] - this.number[i - 1]) / 2;
                    this.y[i] = this.y[i - 1] - (this.number[i] + this.number[i - 1]) / 2;
                    this.col[i] = 225;
                    this.arcX[i] = this.x[i] - this.number[i] / 2;
                    this.arcY[i] = this.y[i] + this.number[i] / 2;
                    this.start_arc[i] = PI + HALF_PI;
                    this.stop_arc[i] = TWO_PI;
                    break;
            }
            this.arcSize[i] = this.number[i] * 2;
        }
        console.log(this.number);
    }

    fibD(n) {
        background(220);
        translate(width / 2, height / 2);
        // orbitControl();
        //if (this.resize > 20) {
        //  this.resize = 20;
        //}
        for (var i = 0; i < n; i++) {
            fill( /*this.col[i]*/ 0);
            // noStroke();
            // stroke(0, 125, 255);
            stroke(125);
            strokeWeight(5);
            rect(this.x[i] * this.resize, this.y[i] * this.resize, this.number[i] * this.resize, this.number[i] * this.resize);

        }
        for (var i = 0; i < n; i++) {
            strokeWeight(4);
            stroke(255, 0, 125);
            noFill();
            // arc(this.arcX[i] * this.resize, this.arcY[i] * this.resize, this.arcSize[i] * this.resize, this.arcSize[i] * this.resize, this.start_arc[i], this.stop_arc[i]);
        }
    }

    fibResize() {
        if (fib.magnify_flag) {
            fib.resize -= 50 / 500 * fib.resize;
        } else if (!fib.magnify_flag) {
            fib.resize += 50 / 500 * fib.resize;
        }
    }
}
