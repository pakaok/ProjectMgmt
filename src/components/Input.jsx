export function Input({label,textarea, ...props}) {
    const inputClass= "bg-stone-200 rounded-sm  border-b-2 border-stone-900 focus:outline-none"
  return (
    <p className="flex flex-col gap-2">
      <label className="font-semibold text-stone-600 uppercase">{label}</label>
      {textarea ? <textarea className={inputClass} {...props}></textarea>: <input className={inputClass} {...props}/>}
    </p>
  );
}
