window = addEventListener('load', drawStan);
function drawStan() {
  const c = document.getElementById("Stan");
  function drawbody() {
    const body = c.getContext("2d");
    body.beginPath();
    body.ellipse(154, 181, 55, 73, 0, Math.PI + 0.09, 2 * Math.PI - 0.09);
    body.fillStyle = "#d26f5f";
    body.fill();
  }

  function drawLegs() {
    const legs = c.getContext("2d");
    legs.beginPath();
    legs.fillStyle = '#4278c8';
    legs.fillRect(116, 180, 80, 15);
    legs.beginPath();
    legs.fillStyle = '#000';
    legs.arc(135, 266, 75, 3 * Math.PI / 2 - 0.35, 3 * Math.PI / 2 + 0.35, false);
    legs.fill();
    legs.beginPath();
    legs.arc(178, 272, 80, 3 * Math.PI / 2 - 0.32, 3 * Math.PI / 2 + 0.32, false);
    legs.fill();
  }

  function drawDownOfBody() {
    const downOfBody = c.getContext("2d");
    downOfBody.beginPath();
    downOfBody.moveTo(111, 180);
    downOfBody.lineTo(113, 174);
    downOfBody.lineTo(200, 174);
    downOfBody.lineTo(202, 180);
    downOfBody.fillStyle = "#d26f5f";
    downOfBody.fill();
  }

  function drawDownOfBodyDress() {
    const downOfBodyDress = c.getContext("2d");
    downOfBodyDress.beginPath();
    downOfBodyDress.arc(155, 37, 150, Math.PI / 2 - 0.3, Math.PI / 2 + 0.3);
    downOfBodyDress.fillStyle = "#d26f5f";
    downOfBodyDress.fill();
  }

  function drawZipper() {
    const zipper = c.getContext("2d");
    zipper.beginPath();
    zipper.lineWidth = 1;
    zipper.moveTo(155, 148);
    zipper.lineTo(153, 187);
    zipper.stroke();
    zipper.fillStyle = '#000';
    zipper.beginPath();
    zipper.arc(150, 154, 1, 0, 2 * Math.PI);
    zipper.fill();
    zipper.beginPath();
    zipper.arc(149, 165, 1, 0, 2 * Math.PI);
    zipper.fill();
    zipper.beginPath();
    zipper.arc(149, 178, 1, 0, 2 * Math.PI);
    zipper.fill();
  }

  function drawSleeve() {
    const sleeve = c.getContext("2d");
    sleeve.beginPath();
    sleeve.lineWidth = 0.5;
    sleeve.moveTo(118, 155);
    sleeve.lineTo(115, 170);
    sleeve.stroke();
    sleeve.beginPath();
    sleeve.moveTo(189, 154);
    sleeve.lineTo(192, 170);
    sleeve.stroke();
  }

  function drawHands() {
    const hands = c.getContext("2d");
    hands.beginPath();
    hands.arc(108, 169, 9.5, 0, 2 * Math.PI);
    hands.fillStyle = "#ff1c3d";
    hands.fill();
    hands.beginPath();
    hands.arc(200, 172, 9.5, 0, 2 * Math.PI);
    hands.fill();
    const fingers = c.getContext("2d");
    fingers.beginPath();
    fingers.arc(114, 166, 4, 0, 2 * Math.PI);
    fingers.fillStyle = "#ff1c3d";
    fingers.strokeStyle = '#000';
    fingers.lineWidth = 0.1;
    fingers.fill();
    fingers.stroke();
    fingers.beginPath();
    fingers.arc(192, 169, 4, 0, 2 * Math.PI);
    fingers.fill();
    fingers.stroke();
  }

  function drawCollars() {
    const collars = c.getContext("2d");
    collars.beginPath();
    collars.moveTo(157, 147);
    collars.quadraticCurveTo(175, 147, 190, 134);
    collars.strokeStyle = "#ff2045";
    collars.lineWidth = 7;
    collars.lineCap = "round";
    collars.stroke();
    collars.beginPath();
    collars.moveTo(150, 147);
    collars.quadraticCurveTo(133, 147, 122, 134);
    collars.stroke();
  }

  function drawhead() {
    const head = c.getContext("2d");
    head.beginPath();
    head.arc(152, 85, 58, 0, 2 * Math.PI);
    head.fillStyle = "#ffedc4";
    head.fill();
    const hat = c.getContext("2d");
    hat.beginPath();
    hat.arc(152, 83, 58, -0.03 * Math.PI, 1 * Math.PI, true);
    hat.fillStyle = "#3973c4";
    hat.fill();
    hat.strokeStyle = '#3973c4';
    hat.lineCap = "butt";
    hat.lineWidth = 1;
    hat.stroke();
    hat.beginPath();
    hat.moveTo(93, 78);
    hat.quadraticCurveTo(160, 56, 212, 74);
    hat.strokeStyle = "#ff1f41";
    hat.lineWidth = 12
    hat.stroke();
    hat.beginPath();
    hat.moveTo(93, 84);
    hat.quadraticCurveTo(160, 62, 212, 79);
    hat.fillStyle = '#ffedc4';
    hat.fill();
  }

  function drawEyes() {
    const eyes = c.getContext("2d");
    eyes.beginPath();
    eyes.ellipse(137, 93, 15, 18, Math.PI / 5, 0, 2 * Math.PI);
    eyes.lineWidth = 1;
    eyes.fillStyle = '#fff';
    eyes.fill();
    eyes.beginPath();
    eyes.ellipse(169, 91, 15, 18, - Math.PI / 5, 0, 2 * Math.PI);
    eyes.fill();
  }

  function drawEyeBrows() {
    const eyebrows = c.getContext("2d");
    eyebrows.beginPath();
    eyebrows.moveTo(114, 80);
    eyebrows.lineTo(127, 67);
    eyebrows.strokeStyle = "#000";
    eyebrows.lineWidth = 1.3;
    eyebrows.stroke();
    eyebrows.beginPath();
    eyebrows.moveTo(188, 76);
    eyebrows.lineTo(173, 66);
    eyebrows.stroke();
  }

  function drawPupil() {
    const pupil = c.getContext("2d");
    pupil.beginPath();
    pupil.fillStyle = '#000';
    pupil.arc(143, 93, 2, 0, 2 * Math.PI);
    pupil.fill();
    pupil.arc(163, 93, 2, 0, 2 * Math.PI);
    pupil.fill();
  }

  function drawMouth() {
    const mouth = c.getContext("2d");
    mouth.beginPath();
    mouth.moveTo(140, 122);
    mouth.lineTo(173, 122);
    mouth.lineTo(157, 135);
    mouth.fillStyle = '#322d31';
    mouth.fill();
  }

  function drawTeeth() {
    const teeth = c.getContext('2d');
    teeth.beginPath();
    teeth.strokeStyle = '#000';
    teeth.fillStyle = '#fff';
    teeth.fillRect(144, 123, 5, 3);
    teeth.fillRect(150, 123, 6, 4);
    teeth.fillRect(157, 123, 6, 4);
    teeth.fillRect(164, 123, 5, 3);
  }

  function drawPompon() {
    const pompon = c.getContext('2d');
    pompon.beginPath();
    pompon.fillStyle = 'red';
    pompon.strokeStyle = '#000';
    pompon.lineWidth = 0.5;
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, 5 * Math.PI / 6, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, 3 * Math.PI / 4, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, 5 * Math.PI / 8, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, Math.PI / 2, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, 0, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, Math.PI / 8, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, Math.PI / 4, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();
    pompon.beginPath();
    pompon.ellipse(148, 25, 1, 13, 3 * Math.PI / 8, 0, 2 * Math.PI);
    pompon.stroke();
    pompon.fill();	
  }

  drawbody();
  drawLegs();
  drawDownOfBody();
  drawDownOfBodyDress();
  drawZipper();
  drawSleeve();
  drawHands();
  drawCollars();
  drawhead();
  drawEyes();
  drawEyeBrows();
  drawPupil();
  drawMouth();
  drawTeeth();
  drawPompon();
}