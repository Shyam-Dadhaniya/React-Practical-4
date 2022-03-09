const today = new Date();
const date = String(today.getDate()).padStart(2, "0");
const month = String(today.toLocaleString("default", { month: "short" }));
const year = today.getFullYear();
const CurrentDay = new Date()
  .toLocaleDateString("en-US", {
    weekday: "long",
  })
  .toUpperCase();
export { date, month, year, CurrentDay };
