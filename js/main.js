import * as THREE from "https://unpkg.com/three@0.119.0/build/three.module.js"
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

const geometry = new THREE.SphereGeometry(.1)

const amplifier = 100

//scene.add(cube)

camera.position.z = 60

controls.update()

function animate() {

    requestAnimationFrame(animate)
    
    controls.update()

	renderer.render(scene, camera)
}

animate()

window.loadDS = function(name, color) {
    console.log(`loading data/DS${name}.txt`)

    fetch(`data/DS${name}.txt`)
        .then(response => response.json())
        .then(response => addMesh(response, color))
}

function addMesh(mesh, color) {

    mesh.forEach(element => {
        addDot(element, color)
    })
}

function addDot(coordinates, color) {

    var material = new THREE.MeshBasicMaterial( { color: color } )

    var dot = new THREE.Mesh(geometry, material)
    dot.position.set(
        coordinates.x * amplifier, 
        coordinates.y * amplifier, 
        coordinates.z * amplifier
    )
    scene.add(dot)
}


  // outputs the content of the text file