function addAndRemoveElement(commands) {
  let element = 1;
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == "add") {
      result.push(element);
      element++;
    }
    if (commands[i] == "remove") {
      result.pop();
      element++;
    }
  }
  return result.length ? result.join("\n") : "Empty";
}
addAndRemoveElement(["add", "add", "add", "add"]);
