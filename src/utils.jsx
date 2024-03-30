const WeekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const getItem = (id, habits) => habits?.find((habit) => habit.id === id);

export const getTimeLineDay = (day) => WeekDay[day];

export const getFormattedDate = (date) => date.replaceAll("-", "/");

//Local Storage helper starts here

export const getLSData = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const setLSData = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};

//Local storage helper ends here
