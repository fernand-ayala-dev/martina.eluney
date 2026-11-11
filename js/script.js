// Cuenta regresiva: 9 de enero de 2027, al comienzo del día en Argentina.
// Si conocés el horario de la fiesta, podés cambiar 00:00 por la hora real.
const eventDate = new Date("2027-01-09T00:00:00-03:00").getTime();

const countdownFields = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};
const countdownNote = document.getElementById("countdownNote");

function updateCountdown() {
  const distance = eventDate - Date.now();

  if (distance <= 0) {
    Object.values(countdownFields).forEach(field => field.textContent = "00");
    countdownNote.textContent = "¡Llegó el gran día!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownFields.days.textContent = String(days).padStart(3, "0");
  countdownFields.hours.textContent = String(hours).padStart(2, "0");
  countdownFields.minutes.textContent = String(minutes).padStart(2, "0");
  countdownFields.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

