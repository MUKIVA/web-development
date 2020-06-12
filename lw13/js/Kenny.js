window.onload = () => {
	drawFourth();
}

function drawLegs(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "#f66306";
  ctx.fillRect(98, 156, 82, 35);

  ctx.beginPath();
  ctx.moveTo(96, 190);
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineTo(182, 190);
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

function drawBody(ctx) {
  //body
  ctx.beginPath();
  ctx.arc(138, 164, 60, 0, Math.PI, true);
  ctx.fillStyle = "#fe740f";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(138, -42, 220, Math.PI*5/12, Math.PI*7/12, false);
  ctx.fillRect(88, 162, 102, 10);
  ctx.fill();

  //zipper for clothes
  ctx.beginPath();
  ctx.moveTo(140, 136);
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';
  ctx.lineTo(140, 178);
  ctx.strokeStyle = "#000";
  ctx.stroke();

  //left hand
  ctx.beginPath();
  ctx.moveTo(98, 148);
  ctx.lineWidth = 1;
  ctx.lineTo(93, 164);
  ctx.stroke();

  //right hand
  ctx.beginPath();
  ctx.moveTo(178, 148);
  ctx.lineWidth = 1;
  ctx.lineTo(182, 164);
  ctx.stroke();
}

function drawHead(ctx) {
  drawHood(ctx);
  drawFace(ctx);
  drawEyes(ctx);
  drawLace(ctx);
  drawFurHood(ctx);
}

function drawHood(ctx) {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.arc(140, 76, 68, 0, Math.PI*2, true);
  ctx.fillStyle = "#ff7b1c";
  ctx.fill();
  ctx.strokeStyle = "#d95701";
  ctx.stroke();
}

function drawFace(ctx) {
  ctx.beginPath();
  ctx.arc(138, 75, 36.5, 0, Math.PI*2, true);
  ctx.fillStyle = "#fde1b9";
  ctx.fill();
}

function drawEyes(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 0.4;
  ctx.arc(124, 68, 15, 0, Math.PI*2, true);
  ctx.arc(154, 70, 15, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.arc(120, 72, 18, 0, Math.PI*2, true);
  ctx.arc(157, 74, 18, 0, Math.PI*2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(126, 71, 2.5, 0, Math.PI*2, true);
  ctx.arc(152, 73, 2.5, 0, Math.PI*2, true);
  ctx.fillStyle = "#000";
  ctx.fill();
}

function drawFurHood(ctx) {
  ctx.beginPath();
  ctx.moveTo(140, 38);
  ctx.bezierCurveTo(140, 38, 76, 66, 136, 112);
  ctx.bezierCurveTo(136, 112, 86, 114, 94, 68);
  ctx.bezierCurveTo(94, 64, 104, 32, 140, 38);
  ctx.fillStyle = "#653300";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(139, 38);
  ctx.bezierCurveTo(140, 38, 198, 78, 136, 112);
  ctx.bezierCurveTo(136, 112, 186, 124, 180, 68);
  ctx.bezierCurveTo(180, 64, 172, 38, 140, 38);
  ctx.fillStyle = "#653300";
  ctx.fill();
}

function drawLace(ctx) {
  ctx.beginPath();
  ctx.bezierCurveTo(140, 37.5, 86, 30, 90, 86);
  ctx.bezierCurveTo(90, 86, 94, 118, 136, 122);
  ctx.bezierCurveTo(136, 122, 180, 130, 186, 86);
  ctx.bezierCurveTo(186, 84, 190, 42, 140, 37.5);
  ctx.lineWidth = 0.4;
  ctx.strokeStyle = "#000";
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 0.5;
  ctx.lineCap = 'round';
  ctx.moveTo(136, 112);
  ctx.lineTo(137, 132);
  ctx.lineTo(139, 138);

  ctx.moveTo(136, 112);
  ctx.lineTo(132, 122);
  ctx.lineTo(130, 136);
  ctx.stroke();
}

function drawHands(ctx) {
  ctx.beginPath();
  ctx.arc(84, 164, 10, 0, Math.PI*2, true);
  ctx.arc(192, 166, 10, 0, Math.PI*2, true);
  ctx.fillStyle = "#6e3815";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(92, 162, 4, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fillStyle = "#6e3815";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(184, 162, 4, 0, Math.PI*2, true);
  ctx.stroke();
  ctx.fillStyle = "#6e3815";
  ctx.fill();
}

function drawFourth() {
  let canvas = document.getElementById('Kenny');
  let ctx = canvas.getContext('2d');

  drawLegs(ctx);
  drawBody(ctx);
  drawHead(ctx);
  drawHands(ctx);
}
