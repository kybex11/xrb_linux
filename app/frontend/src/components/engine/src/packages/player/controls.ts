interface Player {
    speed: number;
    x: number;
    y: number;
    z: number;
    rotX: number;
    rotY: number;
    rotZ: number
}
let player_: Player;
let stopUpdateSpeed = true;

import { DeChangePosition, DeChangeRotation } from "./player";

export function handleControl(player: Player) {
    const speed = player.speed;

    let moveX = 0;
    let moveY = 0;
    let moveZ = 0;

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;

    window.addEventListener('keydown', (ev) => {
        switch(ev.key) {
            case 'w':
                moveZ = speed;
                stopUpdateSpeed = true;
                updateSpeed();
                break;
            case 'a': 
                moveZ = -speed;
                stopUpdateSpeed = true;
                updateSpeed();
                break;
            case 's':
                moveX = -speed;
                break;
            case 'd':
                moveX = speed;
                stopUpdateSpeed = true;
                updateSpeed();
                break;
        
        }
    });

    window.addEventListener('keyup', (ev) => {
        switch(ev.key) {
            case 'w':
            case 's':
                stopUpdateSpeed = false;
                updateSpeed();
                moveZ = 0;
                break;
            case 'a':
            case 'd':
                stopUpdateSpeed = false;
                updateSpeed();
                moveX = 0;
                break;
        }
    });

    function updateSpeed() {
        if (speed == 1) {
              for (var i = 0; i < 1000; i++) {
                setTimeout(() => {
                    if (stopUpdateSpeed) {
                        speed == 1;
                    } else {
                        speed+0.001;
                    }    
                }, 20);
            }   
        }
    }

    function updatePosition() {
        player.x += moveX * 0.1;
        player.y += moveY * 0.1;
        player.z += moveZ * 0.1;

        player.rotX += player.rotX * 0.1;
        player.rotY += player.rotY * 0.1;
        player.rotZ += player.rotZ * 0.1;

        DeChangePosition(player); 
        DeChangeRotation(player);

        requestAnimationFrame(updatePosition);
    }

    updatePosition(); 
    
    const returnPlayer: Player = {
        speed: speed,
        x: player.x,
        y: player.y, 
        z: player.z,
        rotX: player.rotX,
        rotY: player.rotY,
        rotZ: player.rotZ,
    };

    return returnPlayer;
}

export function removeHandler(player: Player) {}