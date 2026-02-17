import RowItem from "./RowItem";

export default function SectionBlock({
  sec,

  state,
  collapsed,
  toggleCollapse,
  setRow,
  setExtraRow,
  addRow,
  setField
}) {
  const isOpen = !collapsed[sec.id];
  const extraKeys = Object.keys(state.extraRows).filter((k) =>
    k.startsWith(sec.id + "_extra_")
  );

  return (
    <div className="mt-3 rounded-xl overflow-hidden border border-[#2E2E38] bg-[#1A1A20]">
      <div
        className="flex justify-between items-center px-3 py-2 border-b border-[#2E2E38] cursor-pointer select-none"
        onClick={() => toggleCollapse(sec.id)}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-lg bg-[#222228]">
            {sec.icon}
          </div>
          <div>
            <div className="text-sm font-bold" style={{ color: sec.color }}>
              {sec.title}
            </div>
            <div className="text-[10px] text-[#6B6876] mt-0.5">{sec.time}</div>
          </div>
        </div>
        <div
          className={`text-xs text-[#6B6876] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </div>
      </div>

      {isOpen && (
        <div>
          {sec.isWork && (
            <div className="flex items-center gap-2.5 px-3 py-2 border-b border-[#2E2E38] flex-wrap">
              <span className="text-[11px] font-semibold text-[#6B6876]">Start</span>
              <input
                type="time"
                value={state.workStart}
                onChange={(e) => setField("workStart", e.target.value)}
                className="bg-[#222228] border border-[#2E2E38] rounded-md text-[#F0EDE8] text-[13px] font-semibold px-2 py-1 w-22 outline-none"
              />
              <span className="text-[#6B6876] text-[12px]">→</span>
              <span className="text-[11px] font-semibold text-[#6B6876]">End</span>
              <input
                type="time"
                value={state.workEnd}
                onChange={(e) => setField("workEnd", e.target.value)}
                className="bg-[#222228] border border-[#2E2E38] rounded-md text-[#F0EDE8] text-[13px] font-semibold px-2 py-1 w-22 outline-none"
              />
            </div>
          )}

          {sec.rows.map((r, i) => {
            const key = `${sec.id}_${i}`;
            return (
              <RowItem
                key={key}
                
                label={r.label}
                ph={r.ph}
                rowData={state.rows[key]}
                onChange={(field, val) => setRow(key, field, val)}
                onToggle={() => setRow(key, "done", !(state.rows[key]?.done))}
              />
            );
          })}

          {extraKeys.map((key) => (
            <RowItem
              key={key}
              
              label="+"
              ph="Add item…"
              rowData={state.extraRows[key]}
              onChange={(field, val) => setExtraRow(key, field, val)}
              onToggle={() =>
                setExtraRow(key, "done", !(state.extraRows[key]?.done))
              }
            />
          ))}

          {sec.addable && (
            <button
              className="w-full text-center border-t border-dashed border-[#2E2E38] text-[#6B6876] text-[12px] font-semibold py-2 cursor-pointer bg-transparent"
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
