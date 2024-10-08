import * as THREE from 'three';

let scene: THREE.Scene;

export function CreateScene() {
    scene = new THREE.Scene();
    return scene;
}

export function SetSceneBackground(path: any) {
    const loader = new THREE.TextureLoader();
    const texture = loader.load(path);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );
    scene.background = texture;
}