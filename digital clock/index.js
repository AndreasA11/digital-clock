

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const todEl = document.getElementById("tod");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let tod = "A.M.";

  if(h == 12) {
    tod = "P.M.";
  } 
  if (h > 12) {
    h = h - 12;
    
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  todEl.innerText = tod;
  setTimeout(() => {
    updateClock();
  }, 1000);
} 

updateClock();

