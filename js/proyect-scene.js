// CANVAS:
let canvas, display, scene;
let sceneWidth, sceneHeight;
let camera, renderer;
let cube;

const clock = new THREE.Clock()

initScene();
awake();

const update = () => {
    const elapsedTime = clock.getElapsedTime()
    cube.rotation.x = 0.5 * elapsedTime;
    cube.rotation.y = 0.5 * elapsedTime;
    renderer.render(scene, camera);
    requestAnimationFrame(update);
}

update();


window.addEventListener('resize', () => {
    // Update sizes
    sceneWidth = display.clientWidth;
    sceneHeight = display.clientHeight;

    // Update camera
    camera.aspect = sceneWidth / sceneHeight;
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sceneWidth, sceneHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})


function initScene() {
    canvas = document.querySelector('canvas.webgl');
    display = document.querySelector('div.canvas-display');
    scene = new THREE.Scene();
    sceneWidth = display.clientWidth;
    sceneHeight = display.clientHeight;

    camera = new THREE.PerspectiveCamera(75,
        sceneWidth / sceneHeight, 0.1, 1000);

    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 2
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
    renderer.setSize(sceneWidth, sceneHeight);
    renderer.setClearColor(0x000000, 0);
}

function awake() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 1.0 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.lookAt(cube.position.x, cube.position.y, cube.position.z);
}


