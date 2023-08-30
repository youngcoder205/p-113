function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(300, 300);
    webcam.hide();
  }
  
  function draw() {
    image(webcam, 70, 110, 380, 290);
    fill("cyan");
    circle(60, 100, 70);
    fill("lightgreen");
    rect(95, 90, 350, 20);
    fill("cyan");
    circle(450, 100, 70);
    fill("lightgreen");
    rect(50, 134, 20, 251);
    fill("lightgreen")
    rect(85, 390, 350, 20);
    fill("cyan");
    circle(60, 400, 70);
    fill("lightgreen")
    rect(440, 134, 20, 250);
    fill("cyan");
    circle(450, 400, 70);
  
  
  }
  
  function Snap() {
    save("selfie.png")
  }