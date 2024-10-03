import * as THREE from 'three';

interface Player {
    speed: number;
    x: number;
    y: number;
    z: number;
    rotX: number;
    rotY: number;
    rotZ: number
}

let parentGroup = new THREE.Group();

export function CreateCapsulePlayer(camera: THREE.PerspectiveCamera, scene: THREE.Scene, player: Player) {
    parentGroup.position.x = player.x;
    parentGroup.position.y = player.y;
    parentGroup.position.z = player.z;

    const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 10, 10);
    const capsuleMesh = new THREE.Mesh(capsuleGeometry, new THREE.MeshBasicMaterial());
    
    parentGroup.add(capsuleMesh);
    parentGroup.add(camera);
    camera.position.set(0, 5, 0);

    scene.add(parentGroup);
}

export function DeChangePosition(position: Player) {
    parentGroup.position.set(position.x, position.y, position.z);
}

export function DeChangeRotation(rotation: Player) {
    parentGroup.rotation.set(rotation.rotX, rotation.rotY, rotation.rotZ);
}