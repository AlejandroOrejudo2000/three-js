contactMain();
bg();

function contactMain() {

    const td = new TDisplay(
        document.getElementById('cv-contact'),
        document.getElementById('root-contact'));
    const g = new THREE.BoxGeometry(1, 1, 1);
    //const m = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 1.0 });
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
        //cube.rotation.y = 0.5 * elapsedTime;
        //cube.rotation.x = 0.5 * elapsedTime;
        td.render();
        requestAnimationFrame(update);
    };

    update();
}

function bg() {
    const td = new TDisplay(
        document.getElementById('cv-bg'),
        document.getElementById('root-bg'));
    const spaceTex = new THREE.TextureLoader().load('../images/skybox.jpg');
    td.scene.background = spaceTex;
    td.renderer.setClearColor(0xfff, 0.5);
    const update = () => {
        td.render();
        requestAnimationFrame(update);
    };

    update();
}




