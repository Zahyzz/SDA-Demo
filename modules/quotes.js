export async function initQuotes(textId, authorId, refreshBtnId) {
  const textEl = document.getElementById(textId);
  const authorEl = document.getElementById(authorId);
  const refreshBtn = document.getElementById(refreshBtnId);

  async function fetchQuote() {
    textEl.textContent = "Loading...";
    authorEl.textContent = "";
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      textEl.textContent = `"${data.quote}"`;
      authorEl.textContent = `- ${data.author}`;
    } catch (error) {
      textEl.textContent = "Could not fetch quote. Stay positive anyway!";
    }
  }

  refreshBtn.onclick = fetchQuote;
  fetchQuote();
}
