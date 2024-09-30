import * as THREE from 'three';

export function Renderer(canvas: any) {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
      });
    return renderer;
}

export function SetScreenRendererSize(renderer: THREE.Renderer) {
    renderer.setSize( window.innerWidth, window.innerHeight );
}

export function SetCustomRendererSize(renderer: THREE.Renderer, width: number, height: number) {
    renderer.setSize( width, height );
}