function solve(day) {
  let numOfDay = 0;
  switch (day) {
    case "Monday":
      numOfDay = 1;
      break;
    case "Tuesday":
      numOfDay = 2;
      break;
    case "Wednesday":
      numOfDay = 3;
      break;
    case "Thursday":
      numOfDay = 4;
      break;
    case "Friday":
      numOfDay = 5;
      break;
    case "Saturday":
      numOfDay = 6;
      break;
    case "Sunday":
      numOfDay = 7;
      break;
    default:
      console.log("error");
      return;
  }
  console.log(numOfDay);
}
solve("Monday");
