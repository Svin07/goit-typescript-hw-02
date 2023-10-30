/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Moonday = "workday",
  Thursday = "workday",
  Sunday = "holiday",
}

function isWeekend(day: Day): boolean {
  if (Day.Moonday === "workday") {
    return true;
  } else {
    return false;
  }
}
