export default function FocusInput({
  styles,
  value,
  onChange
}) {
  return (
    <div style={styles.focusWrap}>
      <div style={styles.focusLbl}>⚡ Top Priority</div>
      <input
        style={styles.focusInput}
        placeholder="The one thing that matters most today…"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
