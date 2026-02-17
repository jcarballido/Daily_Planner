export default function MoodPicker({

  moods,
  selected,
  onSelect
}) {
  return (
    <div className="mt-3 mx-3 bg-[#1A1A20] border border-[#2E2E38] rounded-xl px-3 py-3 flex items-center gap-2.5">
      <div className="text-[10px] font-bold uppercase tracking-wide text-[#6B6876] flex-shrink-0">
        Mood
      </div>
      <div className="flex gap-1.5">
        {moods.map((m) => (
          <div
            key={m}
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-2xl cursor-pointer border-2 ${
              selected === m
                ? "border-[#A78BFA] bg-[#1e1a2e]"
                : "border-transparent bg-[#222228]"
            }`}
            onClick={() => onSelect(m)}
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
