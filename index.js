import { data } from "./data.js";

function canvasResize() {
    const canvas = document.getElementById('circuit-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawCircuit(data) {
    const canvas = document.getElementById('circuit-canvas');
    const gridSize = data.meta.gridSize;
    const w = canvas.width;
    const h = canvas.height;
    const ratio = w > h ? h / w : w / h;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#292929";
    ctx.fillRect(0, 0, w, h);
    
    // draw grid
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#fff';
    /** canvas 위치 보정 */
    let delta = gridSize * ratio % 1;
    for (let i = 0; i < gridSize * ratio + 1; i++) {
        console.log(delta);
        if (w > h) {
            ctx.moveTo(0, (h / (gridSize * ratio)) * (i + delta / 2));
            ctx.lineTo(w, (h / (gridSize * ratio)) * (i + delta / 2));
        } else {
            ctx.moveTo((w / (gridSize * ratio)) * (i + delta / 2), 0);
            ctx.lineTo((w / (gridSize * ratio)) * (i + delta / 2), h);
        }
        ctx.stroke();
    }
    
    for (let i = 0; i < gridSize + 1; i++) {
        if (w > h) {
            ctx.moveTo((h / (gridSize * ratio)) * i, 0);
            ctx.lineTo((h / (gridSize * ratio)) * i, w);
        } else {
            ctx.moveTo(0, (w / (gridSize * ratio)) * i);
            ctx.lineTo(h, (w / (gridSize * ratio)) * i);
        }
        ctx.stroke();
    }
}

function resize() {
    canvasResize();
    drawCircuit(data);
}

document.addEventListener("DOMContentLoaded", resize);
window.addEventListener('resize', resize);