export default function NotesSection({

  value,
  onChange
}) {
  return (
    <div className="mt-3 mx-3 bg-[#1A1A20] border border-[#2E2E38] rounded-xl overflow-hidden">
      <div className="text-[10px] font-bold tracking-wide uppercase text-[#6B6876] px-3 pt-2 pb-1 border-b border-[#2E2E38]">
        📝 Notes & Brain Dump
      </div>
      <textarea
        placeholder="Thoughts, reminders, ideas…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        className="w-full bg-transparent border-none outline-none text-sm text-[#F0EDE8] resize-none px-3 py-3 leading-[1.7] min-h-[88px] block"
      />
    </div>
  );
}
