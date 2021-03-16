var cursor = true;
var speed = 700;

setInterval(() => {
  if(cursor) {
  document.getElementById('cursor').style.opacity = 0.01;
  cursor = false;
  } else {
  document.getElementById('cursor').style.opacity = 1;
  cursor = true;
  }
}, speed);