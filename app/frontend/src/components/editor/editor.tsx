import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { CreatePerspectiveCamera, CreateCapsulePlayer, Renderer, SetScreenRendererSize, cube, handleControl, useHooks, SetAnimationLoop, CreateScene } from '../engine/engine';
import '../../assets/editor.scss';
import { SetSceneBackground } from '../engine/src/packages/scene/scene';

interface Player {
  speed: number;
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
}

let returnPlayer;

export default function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isShowOther, setIsShowOther] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error('Canvas element not found!');
    }

    const player: Player = {
      speed: 0.0010,
      x: 0,
      y: 0,
      z: 0,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
    };

    const canvas = canvasRef.current;
    const scene = CreateScene();

    console.log('Scene created:', scene);

    const camera = CreatePerspectiveCamera();
    console.log('Camera created:', camera);

    //SetSceneBackground('./sky.jpg');

    returnPlayer = handleControl(player);
    CreateCapsulePlayer(camera, scene, returnPlayer);
    const renderer = Renderer(canvas);
    SetScreenRendererSize();
    SetAnimationLoop(animate);

    const createCube = cube();
    const cubeMesh: THREE.Mesh = createCube(scene);
    
    camera.position.z = 5;
    cubeMesh.rotation.y = 1;
    cubeMesh.position.y = -1;
    cubeMesh.position.z = -4;

    function animate() {
      returnPlayer = handleControl(player);
      renderer.render( scene, camera );
      const d = document.getElementById('fps');
      if (d)
        d.innerHTML = `X: ${player.x}, Y: ${player.y}, Z: ${player.z}`;
    }

    animate();
    
    useHooks(camera, renderer);
  }, [canvasRef]);

  return (
    <div>
      <p id='fps'></p>
      {isShowOther ? (
        <>
        <h1>other</h1>
        </>
      ) : (
        <>
        <canvas ref={canvasRef} id="canvas" width="400" height="400" />
        </>
      )}
      
    </div>
  );
}