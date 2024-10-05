import * as THREE from 'three';

export function CreatePerspectiveCamera() {
    return new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
}

export function CreateOrthographicCamera(width: number, height: number) {
    return new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000);
}