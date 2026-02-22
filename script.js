(() => {
  const target = new Date("2026-09-05T12:00:00+02:00").getTime();
  const root = document.querySelector("[data-countdown]");
  const note = document.querySelector("[data-countdown-note]");

  if (!root || Number.isNaN(target)) {
    return;
  }

  const parts = {
    days: root.querySelector('[data-part="days"]'),
    hours: root.querySelector('[data-part="hours"]'),
    minutes: root.querySelector('[data-part="minutes"]'),
    seconds: root.querySelector('[data-part="seconds"]'),
  };

  const format = (value, width) => String(value).padStart(width, "0");

  const update = () => {
    const now = Date.now();
    let delta = Math.floor((target - now) / 1000);

    if (delta <= 0) {
      parts.days.textContent = "000";
      parts.hours.textContent = "00";
      parts.minutes.textContent = "00";
      parts.seconds.textContent = "00";
      if (note) {
        note.textContent = "Heute ist euer Hochzeitstag. Alles Liebe!";
      }
      return;
    }

    const days = Math.floor(delta / 86400);
    delta -= days * 86400;
    const hours = Math.floor(delta / 3600);
    delta -= hours * 3600;
    const minutes = Math.floor(delta / 60);
    const seconds = delta - minutes * 60;

    parts.days.textContent = format(days, 3);
    parts.hours.textContent = format(hours, 2);
    parts.minutes.textContent = format(minutes, 2);
    parts.seconds.textContent = format(seconds, 2);
  };

  update();
  window.setInterval(update, 1000);
})();
