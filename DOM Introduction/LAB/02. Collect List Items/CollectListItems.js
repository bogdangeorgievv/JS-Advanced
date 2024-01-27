function extractText() {
  const list = document.getElementById("items");
  const items = Array.from(list.children);
  let result = [];
  for (let item of items) {
    result.push(item.textContent);
  }
  const textarea = document.getElementById("result");
  textarea.value = result.join("\n");
}
