const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 移动坐标系
ctx.translate(canvas.width / 2, canvas.height);
// y轴反向
ctx.scale(1, -1);

drawBranch([0, 0], 200, 30, 90);

function drawBranch(v0, length, thick, dir) {
  if (thick < 8 && Math.random() < 0.3) {
    return;
  }
  if (thick < 2) {
    ctx.beginPath();
    ctx.arc(...v0, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#f9d3e3";
    ctx.fill();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(...v0);
  const v1 = [v0[0] + Math.cos((dir * Math.PI) / 180) * length, v0[1] + Math.sin((dir * Math.PI) / 180) * length];
  ctx.lineTo(...v1);
  ctx.lineWidth = thick;
  ctx.strokeStyle = "#420b2f";
  ctx.lineCap = "round";
  ctx.stroke();
  // 递归
  drawBranch(v1, 0.8 * length, 0.8 * thick, dir + Math.random() * 30);
  drawBranch(v1, 0.8 * length, 0.8 * thick, dir - Math.random() * 30);
}
