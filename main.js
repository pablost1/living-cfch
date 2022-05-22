import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// CONSTANTS



// SCENE
const scene = new THREE.Scene();

  // BACKGROUND
const sky_texture = new THREE.TextureLoader().load( "./DaylightBox.png" );
var skybox_geometry = new THREE.SphereGeometry( 500, 20, 20 );
var skybox_material = new THREE.MeshBasicMaterial( { map: sky_texture} );
var skybox = new THREE.Mesh(skybox_geometry, skybox_material);
skybox.material.side = THREE.BackSide;
scene.add(skybox);

// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(15);

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.maxPolarAngle = Math.PI/2;
controls.enableDamping = true;

renderer.render( scene, camera );

// Putting stuff on scene
// GROUND;

const bottom = new THREE.BoxGeometry(3000,0.000001,3000);
const ground_material = new THREE.MeshBasicMaterial({color: 0x00AA00});
const GROUND = new THREE.Mesh( bottom, ground_material);
scene.add(GROUND)
GROUND.position.y= -0.5
// FLOOR 1
const geometry = new THREE.BoxGeometry( 4, 1, 2 );
const material = new THREE.MeshBasicMaterial( {color: 0x880000} );
const floor1 = new THREE.Mesh( geometry, material );

scene.add( floor1 );
// FLOOR 2
const floor2 = new THREE.Mesh( geometry, material );
floor2.position.y = 1

scene.add( floor2 );

// FLOOR 3 
const floor3 = new THREE.Mesh( geometry, material );
floor3.position.y = 2

scene.add( floor3 );

// FLOOR 4
const floor4 = new THREE.Mesh( geometry, material );
floor4.position.y = 3

scene.add( floor4 );

// FLOOR 5 
const floor5 = new THREE.Mesh( geometry, material );
floor5.position.y = 4

scene.add( floor5 );

// INTERACTIONS

var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

function onMouseMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function animate () {
  requestAnimationFrame( animate );
  controls.update()
  renderer.render( scene, camera );
}


window.addEventListener( 'mousemove', onMouseMove, false );

//
animate()