import { useState, useEffect } from "react";

import SECTIONS from "./constants/sections";
import { MOODS } from "./constants/mood";

import { dateKey, formatDate } from "./utils/date";
import { loadState, saveState } from "./utils/storage";
import { initDayState } from "./utils/initDayState";

// import { styles } from "./styles/styles";

import Header from "./components/Header";
import FocusInput from "./components/FocusInput";
import SectionBlock from "./components/SectionBlock";
import MoodPicker from "./components/MoodPicker";
import NotesSection from "./components/NotesSections";

export default function App() {
  const [date, setDate] = useState(new Date());

  const [state, setState] = useState(() =>
    loadState(`myDay_${dateKey(new Date())}`) ||
    initDayState()
  );

  const [collapsed, setCollapsed] = useState({});

  /* -------------------------
     Effects
  -------------------------- */

  useEffect(() => {
    const saved = loadState(`myDay_${dateKey(date)}`);
    setState(saved || initDayState());
  }, [date]);

  useEffect(() => {
    saveState(`myDay_${dateKey(date)}`, state);
  }, [state, date]);

  /* -------------------------
     Handlers
  -------------------------- */

  const changeDate = (delta) => {
    const d = new Date(date);
    d.setDate(d.getDate() + delta);
    setDate(d);
  };

  const setField = (field, val) =>
    setState(s => ({ ...s, [field]: val }));

  const setRow = (key, field, val) =>
    setState(s => ({
      ...s,
      rows: {
        ...s.rows,
        [key]: {
          ...(s.rows[key] || { text: "", done: false }),
          [field]: val
        }
      }
    }));

  const setExtraRow = (key, field, val) =>
    setState(s => ({
      ...s,
      extraRows: {
        ...s.extraRows,
        [key]: {
          ...(s.extraRows[key] || { text: "", done: false }),
          [field]: val
        }
      }
    }));

  const addRow = (secId) =>
    setState(s => {
      const existing = Object.keys(s.extraRows)
        .filter(k => k.startsWith(secId + "_extra_")).length;

      const newKey = `${secId}_extra_${existing}`;

      return {
        ...s,
        extraRows: {
          ...s.extraRows,
          [newKey]: { text: "", done: false }
        }
      };
    });

  const toggleCollapse = (id) =>
    setCollapsed(c => ({
      ...c,
      [id]: !c[id]
    }));

  const clearDay = () => {
    if (window.confirm("Clear all entries for this day?")) {
      saveState(`myDay_${dateKey(date)}`, null);
      setState(initDayState());
    }
  };

  /* -------------------------
     Progress Calculation
  -------------------------- */

  const allRows = [
    ...Object.values(state.rows),
    ...Object.values(state.extraRows)
  ].filter(r => r.text.trim());

  const doneCount = allRows.filter(r => r.done).length;

  const pct = allRows.length
    ? Math.round((doneCount / allRows.length) * 100)
    : 0;

  const { main, sub, isToday } = formatDate(date);

  /* -------------------------
     Render
  -------------------------- */

  return (
    <div className="bg-[#0F0F12] min-h-screen text-[#F0EDE8] font-sans pb-16">
      <Header
        pct={pct}
        main={main}
        sub={sub}
        isToday={isToday}
        changeDate={changeDate}
      />

      <FocusInput
        value={state.focus}
        onChange={(val) => setField("focus", val)}
      />

      <div className="px-3">
        {SECTIONS.map((sec) => (
          <SectionBlock
            key={sec.id}
            sec={sec}
            state={state}
            collapsed={collapsed}
            toggleCollapse={toggleCollapse}
            setRow={setRow}
            setExtraRow={setExtraRow}
            addRow={addRow}
            setField={setField}
          />
        ))}
      </div>

      <MoodPicker
        moods={MOODS}
        selected={state.mood}
        onSelect={(m) => setField("mood", state.mood === m ? "" : m)}
      />

      <NotesSection
        value={state.notes}
        onChange={(val) => setField("notes", val)}
      />

      <button
        className="block mx-auto mt-3 bg-transparent border border-[#2E2E38] rounded-lg text-[12px] text-[#6B6876] font-sans px-5 py-2 cursor-pointer"
        onClick={clearDay}
      >
        Clear This Day
      </button>
    </div>
  );
}