const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes"); // Corrected spelling
const secondEl = document.getElementById("second");

// This function updates the clock every second
function updateClock() {
  const now = new Date();
  monthEl.textContent = now.getMonth()+1;
  dayEl.textContent = now.getDate();
  hourEl.textContent = now.getHours();
  minuteEl.textContent = now.getMinutes();
  secondEl.textContent = now.getSeconds();
}

// Call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
