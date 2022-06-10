class TDisplay {
    constructor(canvas, root) {
        this.canvas = canvas;
        this.root = root;
        this.scene = new THREE.Scene();
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;

        this.camera = new THREE.PerspectiveCamera(
            75, this.width / this.height, 0.1, 1000);
        this.camera.position.set(0, 0, 2);

        this.renderer = new THREE.WebGLRenderer({
            alpha: true, canvas: this.canvas
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0x000000, 0);
        window.addEventListener('resize', () => {
            this.onResize();
        })
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;
        this.camera.aspect = this.root.clientWidth / this.root.clientHeight;
        this.renderer.setSize(this.root.clientWidth, this.root.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
}










