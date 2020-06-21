const canvas = document.querySelector("#web-gl-scene");
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
const distance = 1000;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
  );
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvas.appendChild(renderer.domElement);
  camera.position.z = 1000;
  camera.lookAt(scene.position)

  
  
  for(let i = 0 ; i<500 ; i++){
    const geometry = new THREE.PlaneGeometry(3, 3, 10);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(geometry, material);
    
    plane.position.x = Math.random() * distance * 2 - distance;
    plane.position.y = Math.random() * distance * 2 - distance;
    plane.position.z = Math.random() * distance * 2 - distance;
    
    
    scene.add(plane);
    
    
  }
  
  renderer.render(scene, camera);
  
  const onMouseMove = (e) => {
    const mouseX = e.clientX -window.innerWidth/2
    const mouseY = e.clientY -window.innerHeight/2
    camera.position.x = mouseX;
    camera.position.y = -mouseY;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  };
  document.addEventListener("mousemove", onMouseMove, false);





