const allMonths = [
  { monthName: "January", daysInMonth: 31 },
  { monthName: "February", daysInMonth: 29 },
  { monthName: "March", daysInMonth: 31 },
  { monthName: "April", daysInMonth: 30 },
  { monthName: "May", daysInMonth: 31 },
  { monthName: "June", daysInMonth: 30 },
  { monthName: "July", daysInMonth: 31 },
  { monthName: "August", daysInMonth: 31 },
  { monthName: "September", daysInMonth: 30 },
  { monthName: "October", daysInMonth: 31 },
  { monthName: "November", daysInMonth: 30 },
  { monthName: "December", daysInMonth: 31 },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let startMonthIndex = 1;
let startDay = 1;
let totalCells = 42;
let dayIndex = 0;

const firstArray = [];

const monthUsageArray = allMonths.map((m) => ({
  monthName: m.monthName,
  daysUsed: 0,
}));

function generateArray(startMonthIndex, startDay) {
  let currentMonth = startMonthIndex;
  let currentDay = startDay;

  for (let i = 0; i < totalCells; i++) {
    const monthData = allMonths[currentMonth];

    firstArray.push({
      date: currentDay,
      day: days[dayIndex % 7],
      month: monthData.monthName,
      checked: false,
      level: Math.ceil(Math.random() * 5),
    });

    monthUsageArray[currentMonth].daysUsed++;

    currentDay++;
    dayIndex++;

    if (currentDay > monthData.daysInMonth) {
      currentDay = 1;
      currentMonth = (currentMonth + 1) % 12;
    }
  }

  startMonthIndex = currentMonth;
  startDay = currentDay;

  return { startMonthIndex, startDay };
}

function advanceDay() {
  const monthData = allMonths[startMonthIndex];

  firstArray.shift();
  firstArray.push({
    date: startDay,
    day: days[dayIndex % 7],
    month: monthData.monthName,
    checked: false,
    level: 0,
  });

  monthUsageArray[startMonthIndex].daysUsed++;

  // Move to next day
  startDay++;
  dayIndex++;

  if (startDay > monthData.daysInMonth) {
    startDay = 1;
    startMonthIndex = (startMonthIndex + 1) % 12;
  }

  console.log("Next start:", { startMonthIndex, startDay });
}

// Initial setup
const nextStart = generateArray(startMonthIndex, startDay);
console.log("Initial firstArray:", firstArray);
console.log("Initial monthUsageArray:", monthUsageArray);
console.log("Next start:", nextStart);

// Auto-update every 500ms for demo (change to 86400000 for 24 hours)
setInterval(() => {
  advanceDay();
  console.log("Updated firstArray:", firstArray);
}, 500);
