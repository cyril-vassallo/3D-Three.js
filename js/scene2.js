const canvas = document.querySelector("#web-gl-scene");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
const distance = 100;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer.setSize(window.innerWidth, window.innerHeight);
canvas.appendChild(renderer.domElement);
camera.position.z = 100;


for(let i = 0 ; i<10 ; i++){
  const geometry = new THREE.PlaneGeometry(20, 20, 10);
  const material = new THREE.MeshBasicMaterial({
    color: Math.random()*0xe04f8,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(geometry, material);

  plane.position.x = Math.random() * distance * 2 - distance;
  plane.position.y = Math.random() * distance * 2 - distance;
  plane.position.z = Math.random() * distance * 2 - distance;

  
  scene.add(plane);
  
  const animate = function () {
    requestAnimationFrame(animate);
    
    plane.rotation.x += 0.0;
    plane.rotation.y += 0.01;
    renderer.render(scene, camera);

    
  };
  
  animate();
}







