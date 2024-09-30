import * as THREE from 'three';

export function playAudio(audioPath: any, volume: number) {
    const loader = new THREE.AudioLoader();
    const listener = new THREE.AudioListener();

    loader.load(audioPath, (audioBuffer) => {
        const audio = new THREE.Audio(listener);
        audio.setBuffer(audioBuffer);

        audio.setVolume(volume);
        audio.play();
    });
}