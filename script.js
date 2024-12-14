// script.js
let scene, camera, renderer, sphere;

function init() {
    // Create the scene
    scene = new THREE.Scene();
    
    // Set the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create the renderer and add it to the page
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);
    
    // Create a 3D sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Create 3D light
    const light = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(light);
    
    // Animate the scene
    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Add rotation effect to the sphere
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

init();

// Resize renderer when the window is resized
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
