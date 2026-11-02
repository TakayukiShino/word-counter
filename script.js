const input = document.querySelector("#text-input");
const count = document.querySelector("#character-count");
const clearButton = document.querySelector("#clear-button");
const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });

function updateCount() {
  count.textContent = Array.from(segmenter.segment(input.value)).length;
}

input.addEventListener("input", updateCount);

clearButton.addEventListener("click", () => {
  input.value = "";
  updateCount();
  input.focus();
});

updateCount();