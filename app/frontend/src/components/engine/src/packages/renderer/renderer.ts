import * as THREE from 'three';

let renderer: any;

export function Renderer(canvas: any) {
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
      });
    return renderer;
}

export function SetScreenRendererSize() {
    renderer.setSize( window.innerWidth, window.innerHeight );
}

export function SetCustomRendererSize(width: number, height: number) {
    renderer.setSize( width, height );
}

export function SetAnimationLoop(func: any) {
    renderer.setAnimationLoop( func );
}