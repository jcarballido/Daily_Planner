export default function RowItem({


  label,
  ph,
  rowData,
  onChange,
  onToggle
}) {

  const isDone = rowData?.done;
  
  return (
    <div
      className={`flex items-start border-b border-[#2E2E38] ${
        isDone ? "bg-[#1A2E1A]" : "bg-transparent"
      }`}
    >
      <div className="p-3 cursor-pointer flex-shrink-0" onClick={onToggle}>
        <div
          className={`w-5 h-5 rounded-lg flex items-center justify-center text-[11px] transition-all duration-150 ${
            isDone ? "border-2 border-[#2D5A2D] bg-[#2D5A2D] text-[#6BBF6B]" : "border-2 border-[#3A3A45] bg-transparent text-[#6BBF6B]"
          }`}
        >
          {isDone ? "✓" : ""}
        </div>
      </div>
      <div className="flex-1 min-w-0 pr-2.5">
        <div className="text-[9px] font-bold uppercase tracking-wide pt-2 pb-0.5 text-[#6B6876]">
          {label}
        </div>
        <textarea
          rows={1}
          placeholder={ph}
          value={rowData?.text || ""}
          onChange={(e) => onChange("text", e.target.value)}

          className={`w-full bg-transparent border-none outline-none text-sm py-2 resize-none ${
            isDone ? "text-[#6BBF6B] line-through opacity-70" : "text-[#F0EDE8]"
          }`}
        />
      </div>
    </div>
  );
}
