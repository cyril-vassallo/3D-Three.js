/**
 * Global variables
 */
var scene, camera, renderer, canvas;


/**
 * Script Start Execution
 */
init();
renderElements();
animate();


/**
 * Initialize scene , camera, renderer and canvas
 */
function init() {
  scene = new THREE.Scene();

  const fos = 75;
  const ratio = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(
    fos,
    ratio,
    near,
    far
  );
  camera.position.z = 1500;
  camera.lookAt(scene.position);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvas = document.querySelector("#web-gl-scene");
  canvas.appendChild(renderer.domElement);
}

/**
 * Create and render Elements
 */
function renderElements() {


  const texture = new THREE.TextureLoader().load(
    "./sprite/js.png"
  );

  const geometry = new THREE.PlaneGeometry(100, 100, 10);
  //A material need texture or a basic material
  const material = new THREE.MeshBasicMaterial({
    map: texture
  });

  //A Mesh need a geometry and material object
  const jsMesh = new THREE.Mesh(geometry, material);
  jsMesh.position.x = 0;
  jsMesh.position.y = 0;
  jsMesh.position.z = 1300;

  scene.add(jsMesh);
 



}


/**
 * Manage animations
 */
function animate() {
  const onMouseMove = (e) => {
    const mouseX = (e.clientX - window.innerWidth / 2) * 0.5
    const mouseY = (e.clientY - window.innerHeight / 2) * 0.5
    camera.position.x = mouseX;
    camera.position.y = -mouseY;
    camera.lookAt(scene.position)
    renderer.render(scene, camera);
  };

  const onClick = (e) => {
      const texture = new THREE.TextureLoader().load("./sprite/react.png");

      const geometry = new THREE.PlaneGeometry(100, 100, 10);
      //A material need texture or a basic material
      const material = new THREE.MeshBasicMaterial({
        map: texture,
      });

      //A Mesh need a geometry and material object
      const reactMesh = new THREE.Mesh(geometry, material);
      reactMesh.position.x = 0;
      reactMesh.position.y = 0;
      reactMesh.position.z = 1000;

      scene.add(reactMesh);


      renderer.render(scene, camera);
    
  }

  document.addEventListener("mousemove", onMouseMove, false);
  canvas.addEventListener("click", onClick, false);
}