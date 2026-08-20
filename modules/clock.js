export function initClock(elementId) {
  const clockElement = document.getElementById(elementId);

  function updateTime() {
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString();
  }

  setInterval(updateTime, 1000);
  updateTime();
}
