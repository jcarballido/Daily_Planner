import RowItem from "./RowItem";

export default function SectionBlock({
  sec,
  styles,
  state,
  collapsed,
  toggleCollapse,
  setRow,
  setExtraRow,
  addRow,
  setField
}) {
  const isOpen = !collapsed[sec.id];
  const extraKeys = Object.keys(state.extraRows)
    .filter(k => k.startsWith(sec.id + "_extra_"));

  return (
    <div style={styles.secBlock}>
      <div
        style={styles.secHdr}
        onClick={() => toggleCollapse(sec.id)}
      >
        <div style={styles.secLeft}>
          <div style={styles.secIcon}>{sec.icon}</div>
          <div>
            <div
              style={{ ...styles.secTitle, color: sec.color }}
            >
              {sec.title}
            </div>
            <div style={styles.secTime}>
              {sec.time}
            </div>
          </div>
        </div>

        <div
          style={{
            ...styles.secArrow,
            transform: isOpen ? "rotate(180deg)" : "none"
          }}
        >
          ▼
        </div>
      </div>

      {isOpen && (
        <div>
          {/* Work time picker */}
          {sec.isWork && (
            <div style={styles.wtRow}>
              <span style={styles.wtLbl}>Start</span>
              <input
                type="time"
                style={styles.wtInput}
                value={state.workStart}
                onChange={e =>
                  setField("workStart", e.target.value)
                }
              />
              <span style={{ color: "#6B6876", fontSize: 12 }}>
                →
              </span>
              <span style={styles.wtLbl}>End</span>
              <input
                type="time"
                style={styles.wtInput}
                value={state.workEnd}
                onChange={e =>
                  setField("workEnd", e.target.value)
                }
              />
            </div>
          )}

          {/* Default rows */}
          {sec.rows.map((r, i) => {
            const key = `${sec.id}_${i}`;
            return (
              <RowItem
                key={key}
                styles={styles}
                rowKey={key}
                label={r.label}
                ph={r.ph}
                rowData={state.rows[key]}
                onChange={(field, val) =>
                  setRow(key, field, val)
                }
                onToggle={() =>
                  setRow(
                    key,
                    "done",
                    !state.rows[key]?.done
                  )
                }
              />
            );
          })}

          {/* Extra rows */}
          {extraKeys.map(key => (
            <RowItem
              key={key}
              styles={styles}
              rowKey={key}
              label="+"
              ph="Add item…"
              rowData={state.extraRows[key]}
              onChange={(field, val) =>
                setExtraRow(key, field, val)
              }
              onToggle={() =>
                setExtraRow(
                  key,
                  "done",
                  !state.extraRows[key]?.done
                )
              }
            />
          ))}

          {/* Add button */}
          {sec.addable && (
            <button
              style={styles.addBtn}
              onClick={() => addRow(sec.id)}
            >
              + Add item
            </button>
          )}
        </div>
      )}
    </div>
  );
}
