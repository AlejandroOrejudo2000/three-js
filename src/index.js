import './style/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import star from './img/star.png';
import rose from './models/base.fbx';

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
mainCamera.position.set(0, 0, 2);

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


const sprite = new THREE.TextureLoader().load(star);
const starMat = new THREE.PointsMaterial({
    color: 0xffffff,
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
scene.add(cube);

const fbxLoader = new FBXLoader();
fbxLoader.load(
    rose,
    (object) => {
        object.traverse(function (child) {
            if (child.isMesh) {
                // (child as THREE.Mesh).material = material
                if (child.material) {
                    child.material.transparent = false
                }
            }
        })
        object.scale.set(.002, .002, .002)
        object.position.set(0, 0.5, 0);
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

const light = new THREE.AmbientLight(0xA0A0A0); // soft white light
scene.add(light);

const controls = new OrbitControls(mainCamera, mainRenderer.domElement);

update();

function OnResizeScene() {
    sizes.w = window.innerWidth;
    sizes.h = window.innerHeight;
    mainCamera.aspect = sizes.aspect();
    mainRenderer.setSize(sizes.w, sizes.h);
    mainRenderer.setPixelRatio(window.devicePixelRatio, 2);
    mainCamera.updateProjectionMatrix();
}

function update() {
    stars1.rotateOnAxis(axisY, 0.00020);
    stars2.rotateOnAxis(axisY, 0.00015);
    stars3.rotateOnAxis(axisY, 0.00010);
    controls.update();
    mainRenderer.render(scene, mainCamera);
    requestAnimationFrame(update);
}