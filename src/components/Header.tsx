export default function Header({

  pct,
  main,
  sub,
  isToday,
  changeDate
}) {
  return (
    <div className="bg-[#1A1A20] border-b border-[#2E2E38] sticky top-0 z-50 px-4 py-3">
      {/* Top row: title + progress */}
      <div className="flex justify-between items-center mb-2">
        <div className="text-xl font-bold tracking-tight">My Day</div>
        <div className="flex items-center gap-2">
          <div className="w-20 h-1.5 bg-[#2E2E38] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="text-xs font-semibold text-[#6B6876] min-w-[28px]">{pct}%</div>
        </div>
      </div>

      {/* Date navigation */}
      <div className="flex items-center gap-2">
        <button
          className="bg-[#222228] border border-[#2E2E38] text-[#F0EDE8] w-7 h-7 rounded-md text-lg flex items-center justify-center cursor-pointer"
          onClick={() => changeDate(-1)}
        >
          ‹
        </button>

        <div className="text-center flex-1">
          <div className="text-sm font-bold flex items-center justify-center">
            {main}
            {isToday && (
              <span className="inline-block text-[9px] font-bold bg-[#60A5FA] text-[#0F0F12] px-1.5 py-0.5 rounded-full ml-1">
                TODAY
              </span>
            )}
          </div>
          <div className="text-[10px] text-[#6B6876] uppercase tracking-wide mt-0.5">{sub}</div>
        </div>

        <button
          className="bg-[#222228] border border-[#2E2E38] text-[#F0EDE8] w-7 h-7 rounded-md text-lg flex items-center justify-center cursor-pointer"
          onClick={() => changeDate(1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
