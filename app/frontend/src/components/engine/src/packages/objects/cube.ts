import * as THREE from 'three';

export function cube() {
    return (scene: THREE.Scene) => {
      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const mesh = new THREE.Mesh( geometry, material );
      scene.add(mesh);
      return mesh;
    };
  }