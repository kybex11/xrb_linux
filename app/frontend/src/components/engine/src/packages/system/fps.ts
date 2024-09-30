export function drawFps(textDrawID: string){
    let lastTime = performance.now();
    let fps = 0;

    function animate() {
        requestAnimationFrame(animate);
        const currentTime = performance.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;
        fps = Math.round(1000 / deltaTime);
        const dt = document.getElementById(textDrawID)
        
        if (dt) 
            dt.innerText = `FPS: ${fps}`;
    }
    animate();
}