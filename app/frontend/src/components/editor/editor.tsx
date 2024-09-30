import * as THREE from 'three';
import { useRef, useEffect } from 'react';
import { Renderer, SetScreenRendererSize, cube, useHooks } from '../engine/engine';
import '../../assets/editor.scss';

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

    const renderer = Renderer(canvas);
    SetScreenRendererSize(renderer);
    renderer.setAnimationLoop( animate );

    const createCube = cube();
    const cubeMesh: THREE.Mesh = createCube(scene);
    
    camera.position.z = 5;
    cubeMesh.rotation.y = 1;
    cubeMesh.position.y = -1;
    function animate() {
        
        renderer.render( scene, camera );
    }

    animate();
    
    useHooks(camera, renderer);
  }, [canvasRef]);

  return (
    <div>
      <p id='fps'></p>
      <canvas ref={canvasRef} id="canvas" width="400" height="400" />
    </div>
  );
}