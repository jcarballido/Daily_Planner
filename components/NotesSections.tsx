export default function NotesSection({
  styles,
  value,
  onChange
}) {
  return (
    <div style={styles.notesWrap}>
      <div style={styles.notesLbl}>📝 Notes & Brain Dump</div>
      <textarea
        style={styles.notesTa}
        placeholder="Thoughts, reminders, ideas…"
        value={value}
        onChange={e => onChange(e.target.value)}
        onInput={e => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
    </div>
  );
}
