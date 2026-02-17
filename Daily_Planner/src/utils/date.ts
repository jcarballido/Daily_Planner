export function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function formatDate(d) {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return {
    main: `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    sub: days[d.getDay()],
    isToday: dateKey(d) === dateKey(new Date()),
  };
}
