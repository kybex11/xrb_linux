import * as THREE from 'three';

let scene: THREE.Scene;

export function CreateScene() {
    scene = new THREE.Scene();
    return scene;
}

export function SetSceneBackground(path: any) {
    scene.background
}