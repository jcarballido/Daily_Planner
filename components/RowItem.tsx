export default function RowItem({
  styles,
  rowKey,
  label,
  ph,
  rowData,
  onChange,
  onToggle
}) {
  return (
    <div style={{ ...styles.rowItem, background: rowData?.done ? "#1A2E1A" : "transparent" }}>
      <div style={styles.rowChk} onClick={onToggle}>
        <div style={styles.chkBox(rowData?.done)}>
          {rowData?.done ? "✓" : ""}
        </div>
      </div>

      <div style={styles.rowContent}>
        <div style={styles.rowLbl}>{label}</div>
        <textarea
          style={styles.rowTa(rowData?.done)}
          rows={1}
          placeholder={ph}
          value={rowData?.text || ""}
          onChange={e => onChange("text", e.target.value)}
          onInput={e => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
      </div>
    </div>
  );
}
