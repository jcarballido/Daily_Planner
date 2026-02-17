import  SECTIONS  from "../constants/sections";

export function initDayState() {
  const rows = {};

  SECTIONS.forEach(sec => {
    sec.rows.forEach((_, i) => {
      rows[`${sec.id}_${i}`] = { text: "", done: false };
    });
  });

  return {
    focus: "",
    mood: "",
    notes: "",
    workStart: "09:00",
    workEnd: "17:00",
    rows,
    extraRows: {},
  };
}
