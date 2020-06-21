const canvas = document.querySelector("#web-gl-scene");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);


const geometry = new THREE.PlaneGeometry(20, 20, 10);
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);


camera.position.z = 25;

const animate = function () {
  requestAnimationFrame(animate);

  plane.rotation.x += 0.00;
  plane.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
