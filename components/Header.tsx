export default function Header({
  styles,
  pct,
  main,
  sub,
  isToday,
  changeDate
}) {
  return (
    <div style={styles.header}>
      <div style={styles.row}>
        <div style={styles.title}>My Day</div>
        <div style={styles.progWrap}>
          <div style={styles.progBar}>
            <div style={styles.progFill} />
          </div>
          <div style={styles.progLbl}>{pct}%</div>
        </div>
      </div>

      <div style={styles.dateNav}>
        <button style={styles.navBtn} onClick={() => changeDate(-1)}>‹</button>
        <div style={styles.dateCenter}>
          <div style={styles.dateMain}>
            {main}
            {isToday && <span style={styles.todayPill}>TODAY</span>}
          </div>
          <div style={styles.dateSub}>{sub}</div>
        </div>
        <button style={styles.navBtn} onClick={() => changeDate(1)}>›</button>
      </div>
    </div>
  );
}
