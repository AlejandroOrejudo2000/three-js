// ESCENA:

const scene = new THREE.Scene();

// CAMARA:

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const camera = new THREE.PerspectiveCamera( 75, 
    sizes.width / sizes.height, 0.1, 1000 );

camera.position.x = 0
camera.position.y = 0
camera.position.z = 5 
scene.add(camera);
// Renderer:

const renderer = new THREE.WebGLRenderer();
renderer.setSize( sizes.width,sizes.height );
document.body.appendChild( renderer.domElement );

// Geometría:

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const clock = new THREE.Clock()

const update = () => {
    const elapsedTime = clock.getElapsedTime()
    cube.rotation.x = 0.5 * elapsedTime;
    cube.rotation.y = 0.5 * elapsedTime;
    renderer.render( scene, camera );
	requestAnimationFrame( update );
    
}
update();