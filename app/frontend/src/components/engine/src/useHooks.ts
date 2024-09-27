import * as THREE from 'three';
import { resize, removeResize } from './hooks/resize';

export function useHooks(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer) {
    resize(camera, renderer);
}

export function removeHooks(camera: THREE.PerspectiveCamera, renderer: THREE.Renderer) {
    removeResize(camera, renderer);
}