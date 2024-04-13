<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

// scene
const scene = new THREE.Scene();

// stl model
// const stlLoader = new STLLoader();
// const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

// const models = ["./assets/model/a.stl", "./assets/model/b.stl", "./assets/model/c.stl"];
// stlLoader.load(models[Math.floor(Math.random() * 3)], (geometry) => {
//   const material = new THREE.MeshStandardMaterial({ color: randomColor, roughness: 0 });
//   var mesh = new THREE.Mesh(geometry, material);
//   mesh.geometry.center();
//   mesh.scale.set(0.04, 0.04, 0.04);
//   mesh.rotation.x = -Math.PI / 2;
//   scene.add(mesh);
// });

// model
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);

// random particles
var gParticular = new THREE.CircleGeometry(0.03, 3);
var gMaterial = new THREE.MeshNormalMaterial();

function mathRandom(num = 7) {
  var numValue = -Math.random() * num + Math.random() * num;
  return numValue;
}
var particulars = [];
for (var h = 1; h < 1500; h++) {
  var particular = new THREE.Mesh(gParticular, gMaterial);
  particular.position.set(mathRandom(14), mathRandom(14), mathRandom(14));
  particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
  scene.add(particular);
  particulars.push(particular);
}

// light
const light = new THREE.AmbientLight(0x404040);
const directLight = new THREE.DirectionalLight(0xffffff, 5);
directLight.position.set(5, 0, 2);
scene.add(light);
scene.add(directLight);

// camera, renderer
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
onMounted(() => {
  document.getElementById("three").appendChild(renderer.domElement);
});

// animate
let flgP = true;
let flgR = true;
animate();
function animate() {
  requestAnimationFrame(animate);

  // particles

  particulars.forEach((particular) => {
    if (particular.position.x > 7) {
      particular.position.x = -7;
    }
    if (particular.position.y > 7) {
      particular.position.y = -7;
    }
    particular.position.x += 0.01;
    particular.position.y += 0.01;
  });
  // camera
  camera.rotation.x += 0.00001;
  camera.rotation.z -= 0.001;
  if (flgR) {
    camera.rotation.x += 0.0001;
    if (camera.rotation.x > 0.5) {
      flgR = false;
    }
  } else {
    camera.rotation.x -= 0.0001;
    if (camera.rotation.x < -0.5) {
      flgR = true;
    }
  }
  if (flgP) {
    camera.position.z += 0.001;
    if (camera.position.z > 7) {
      flgP = false;
    }
  } else {
    camera.position.z -= 0.001;
    if (camera.position.z < 1) {
      flgP = true;
    }
  }

  renderer.render(scene, camera);
}

// resize
window.addEventListener("resize", onResize);
onResize();
function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // fix renderer
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // fix camera
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
</script>

<template>
  <div class="absolute" id="three"></div>
</template>
