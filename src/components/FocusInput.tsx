export default function FocusInput({

  value,
  onChange
}) {
  return (
    <div className="mt-3 mx-3 bg-[#1A1A20] border border-[#2E2E38] rounded-xl overflow-hidden">
      <div className="text-[10px] font-bold tracking-wider uppercase px-3 pt-2 pb-1 text-[#A78BFA] border-b border-[#2E2E38]">
        ⚡ Top Priority
      </div>
      <input
        type="text"
        placeholder="The one thing that matters most today…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-none outline-none px-3 py-2 text-[#F0EDE8] text-sm font-medium"
      />
    </div>
  );
}
