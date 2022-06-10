// CANVAS:
class ProyectDisplay extends TDisplay {
    constructor(canvas, display) { super(canvas, display); }

    start() {
        const g = new THREE.BoxGeometry(1, 1, 1);
        const m = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 1.0 });
        this.cube = new THREE.Mesh(g, m);
        this.scene.add(this.cube);
        this.camera.position.set(0, 0, 5);
    }

    update(clock) {
        const elapsedTime = clock.getElapsedTime();
        this.cube.rotation.y = 0.5 * elapsedTime;
        this.cube.rotation.x = 0.5 * elapsedTime;
    }
}

let pdisplay = new ProyectDisplay(
    document.getElementById('cv-proyect'),
    document.getElementById('root-proyect'));






