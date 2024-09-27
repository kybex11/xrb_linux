import * as THREE from 'three';

export function resize(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer) {
    window.addEventListener('resize', () => {
        console.log('Window resized!');
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log(`Window size: ${width}x${height}`);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      });

}

export function removeResize(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer) {
  window.removeEventListener('resize', () => {
    console.log('Window resized!');
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`Window size: ${width}x${height}`);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}