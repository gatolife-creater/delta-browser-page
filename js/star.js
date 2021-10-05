class Stars {
    constructor() {
        this.sx = [];
        this.sy = [];
        this.sz = [];
        this.sr = [];

        this.bx = [];
        this.by = [];
        this.bz = [];
        this.bsize = [];

        this.cam;
        this.delta = 0.001;
    }
    s(n) {
        for (let i = 0; i < n; i++) {
            this.sx[i] = random(-1000, 2000) - 1000 / 2;
            this.sy[i] = random(-1000, 1000) - 1000 / 2;
            this.sz[i] = random(-1000, 2000) - 1000 / 2;
            this.sr[i] = random(10, 50);

            this.bx[i] = random(-1000, 2000) - 1000 / 2;
            this.by[i] = random(-1000, 1000) - 1000 / 2;
            this.bz[i] = random(-1000, 2000) - 1000 / 2;
            this.bsize[i] = random(10, 100);
        }

        this.cam = createCamera();
        // set initial pan angle
        this.cam.pan(-0.8);
    }
    d(n) {
        background(0);
        orbitControl(1, 1, 0);
        let locX = mouseX - height / 2;
        let locY = mouseY - width / 2;

        ambientLight(50);
        // pointLight(255, 255, 255, locX, locY, 100);
        directionalLight(0, 0, 255, 0.5, 0.5, 0);
        directionalLight(0, 255, 125, 0.5, 0, 0.5)
        directionalLight(255, 0, 125, 0, 0.5, 0.5);
        // directionalLight(125,0,255,)
        for (let i = 0; i < n; i++) {
            push();

            this.smart_sphere(
                this.sx[i],
                this.sy[i],
                this.sz[i],
                this.sr[i]
            );


            // this.smart_box(
            //     this.bx[i],
            //     this.by[i],
            //     this.bz[i],
            //     this.bsize[i]
            // )
            pop();

        }

        // pan camera according to angle 'delta'
        //this.cam.pan(this.delta);


    }
    smart_sphere(x, y, z, r) {
        return (
            translate(x, y, z),
            ambientMaterial(250),
            noStroke(),
            sphere(r)
        );
    }
    smart_box(x, y, z, size) {
        return (
            translate(x, y, z),
            // rotateX(0),
            // rotateY(0),
            // rotateZ(0),
            ambientMaterial(255),
            noStroke(),
            box(size)
        );
    }
}
