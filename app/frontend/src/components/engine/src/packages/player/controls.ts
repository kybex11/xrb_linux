interface Player {
    speed: number;
    x: number;
    y: number;
    z: number;
}

export function handleControl(player: Player) {
    const speed = player.speed;

    let moveX = 0;
    let moveY = 0;
    let moveZ = 0;

    window.addEventListener('keydown', (ev) => {
        switch(ev.key) {
            case 'w':
                moveZ = speed;
                break;
            case 'a': 
                moveX = -speed;
                break;
            case 's':
                moveX = -speed;
                break;
            case 'd':
                moveX = speed;
                break;
            default:
                console.log("nothing");
        
        }
    });

    window.addEventListener('keyup', (ev) => {
        switch(ev.key) {
            case 'w':
            case 's':
                moveZ = 0;
                break;
            case 'a':
            case 'd':
                moveX = 0;
                break;
        }
    });

    function updatePosition() {;
        player.x += (moveX - player.x) * 0.1;
        player.y += (moveY - player.y) * 0.1;
        player.z += (moveZ - player.z) * 0.1;

        requestAnimationFrame(updatePosition);
    }

    updatePosition(); 

}



export function removeHandler(player: Player) {}