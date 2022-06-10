contactMain();

function contactMain() {

    const td = new TDisplay(
        document.getElementById('cv-proyect'),
        document.getElementById('root-proyect'));
    const g = new THREE.BoxGeometry(1, 1, 1);
    const m = [
        new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 1.0 }),
        new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 1.0 }),
        new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 1.0 }),
        new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 1.0 }),
        new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 1.0 }),
        new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 1.0 }),
    ];
    let cube = new THREE.Mesh(g, m);
    td.scene.add(cube);
    const controls = new THREE.OrbitControls(td.camera, td.renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    const clock = new THREE.Clock();

    const update = () => {
        const elapsedTime = clock.getElapsedTime();
        cube.rotation.y = 0.5 * elapsedTime;
        cube.rotation.x = 0.5 * elapsedTime;
        td.render();
        requestAnimationFrame(update);
    };

    update();
}



