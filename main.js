import * as THREE from 'three';

const canvas = document.getElementById('cv-main');
const scene = new THREE.Scene();
const sizes = {
    w: window.innerWidth,
    h: window.innerHeight,
    aspect() { return this.w / this.h }
};
let mainCamera = new THREE.PerspectiveCamera(75, sizes.aspect(), 0.1, 1000);
const mainRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvas });
mainRenderer.setSize(sizes.w, sizes.h);
mainRenderer.setClearColor(0x000000, 1);

window.addEventListener('resize', OnResizeScene);

const starGeo = new THREE.BufferGeometry();
const positions = [];
for (let i = 0; i < 500; i++) {
    let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
    );
    positions.push(star.x, star.y, star.z);
}
starGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(new Float32Array(positions), 3));

const sprite = new THREE.TextureLoader().load('./assets/img/star.png');
const starMat = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: sprite
});

const stars1 = new THREE.Points(starGeo, starMat);
const stars2 = new THREE.Points(starGeo, starMat);
const stars3 = new THREE.Points(starGeo, starMat);
stars2.rotateY(90);
stars3.rotateY(45);
scene.add(stars1);
scene.add(stars2);
scene.add(stars3);
const axisY = new THREE.Vector3(0, 1, 0);

update();


function OnResizeScene() {
    sizes.w = window.innerWidth;
    sizes.h = window.innerHeight;
    mainCamera.aspect = sizes.aspect();
    mainRenderer.setSize(sizes.w, sizes.h);
    mainRenderer.setPixelRatio(window.devicePixelRatio, 2);
}
console.log(starGeo.attributes.position);

function update() {
    stars1.rotateOnAxis(axisY, 0.00020);
    stars2.rotateOnAxis(axisY, 0.00015);
    stars3.rotateOnAxis(axisY, 0.00010);
    mainRenderer.render(scene, mainCamera);
    requestAnimationFrame(update);
}



function hello(nm) {
    let name = nm;
    console.log('Hello ${name}');
}

hello('steve');
