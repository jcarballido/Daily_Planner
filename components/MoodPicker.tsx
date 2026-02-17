export default function MoodPicker({
  styles,
  moods,
  selected,
  onSelect
}) {
  return (
    <div style={styles.moodWrap}>
      <div style={styles.moodLbl}>Mood</div>
      <div style={styles.moodOpts}>
        {moods.map(m => (
          <div
            key={m}
            style={styles.moodBtn(selected === m)}
            onClick={() => onSelect(m)}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
