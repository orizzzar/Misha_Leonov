window.addEventListener("load", init);

function init (event)
{
  console.log("JavaScript is working!");
  document.onkeydown = key_pressed;

  const elem = document.getElementById("ula");
  elem.style.left = window.innerWidth / 2 - elem.offsetWidth / 2 + "px";
  elem.style.top = window.innerHeight / 2 - elem.offsetHeight / 2 + "px";

  anim();
  setInterval(moveEye(), 10);
}

let eye_direction = 1;
function moveEye() {
  

  const ula = document.getElementById("eye_left");
}

let key_pressed_event;
let timeout;
let speed = 0.5;

function key_pressed (e)
{
  window.clearTimeout(timeout);
  key_pressed_event = e;

  const elemID = "ula";



  if (e.keyCode == '38')
  {
    // up arrow
    moveElementRelative(elemID, 0, -speed)
  }
  else if (e.keyCode == '40')
  {
    // down arrow
    moveElementRelative(elemID, 0, speed)
  }
  else if (e.keyCode == '37')
  {
    // left arrow
    moveElementRelative(elemID, -speed, 0)
  }
  else if (e.keyCode == '39')
  {
    // right arrow
    moveElementRelative(elemID, speed, 0)
  }

  if (isAway("ula"))
  {
    document.body.style.backgroundColor = "red";
    playAAA();
  }
  else
  {
    document.body.style.backgroundColor = "white";
    stopAAA();
  }

  timeout = window.setTimeout((e) =>
  {
    speed += 0.1;
    key_pressed(e);
  }, 10, e);

}

function moveElementRelative (id, dx, dy)
{
  const elem = document.getElementById(id);
  let x = parseInt(elem.style.left) || 0;
  let y = parseInt(elem.style.top) || 0;
  x += dx;
  y += dy;

  x = Math.max(x, -elem.offsetWidth / 2);
  x = Math.min(x, window.innerWidth - elem.offsetWidth / 2)

  y = Math.max(y, -elem.offsetHeight / 2);
  y = Math.min(y, window.innerHeight - elem.offsetHeight / 2)

  elem.style.left = x + "px";
  elem.style.top = y + "px";
}

function isAway (id)
{
  const elem = document.getElementById(id);
  let x = parseInt(elem.style.left);
  let y = parseInt(elem.style.top);

  if (x < 0
    || y < 0
    || x + elem.offsetWidth > window.innerWidth
    || y + elem.offsetHeight > window.innerHeight) 
  {
    return true;
  }

  return false;
}

const audioAAA = new Audio("falling.mp3");
function playAAA ()
{
  audioAAA.play();
}

function stopAAA ()
{
  audioAAA.pause();
  audioAAA.currentTime = 0;
}

function move_to_mouse (event)
{
  const ula = document.getElementById("ula");
  ula.style.left = (event.clientX - 100) + "px";
  ula.style.top = (event.clientY - 125) + "px";
  console.log(123);
}