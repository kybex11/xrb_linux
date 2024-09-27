import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { cube, useHooks } from '../engine/engine';

export default function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error('Canvas element not found!');
    }
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    console.log('Scene created:', scene);

    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    console.log('Camera created:', camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );

    const createCube = cube();
    const cubeMesh: THREE.Mesh = createCube(scene);
    
    camera.position.z = 5;

    function animate() {
        cubeMesh.rotation.x += 0.01;
        cubeMesh.rotation.y += 0.01;
        renderer.render( scene, camera );
    }

    animate();
    
    useHooks(camera, renderer);
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas" width="400" height="400" />
    </div>
  );
}