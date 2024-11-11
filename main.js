// Basic Three.js setup to display a single sphere

// Scene
const scene = new THREE.Scene();

// Sphere Geometry and Material
const geometry = new THREE.SphereGeometry(3, 32, 32);
const material = new THREE.MeshStandardMaterial({
  color: "#00ff83", // Bright green color for visibility
  roughness: 0.5,
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Basic Point Light
const light = new THREE.PointLight(0xffffff, 1); // Standard white light with default intensity
light.position.set(5, 5, 5); // Positioned to illuminate the sphere
scene.add(light);

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10; // Positioned to view the sphere
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
