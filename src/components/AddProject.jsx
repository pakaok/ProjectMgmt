export default function AddProject() {
  return (
    <section className="min-w-80 mx-16">
      <p className="flex flex-row justify-end gap-4">
        <button className="font-semibold px-4 md:text-lg" >Cancel</button>
        <button className="font-semibold px-4 py-1 bg-stone-800 text-stone-100 md:text-lg rounded-md" >Save</button>
      </p>
      <div className="my-8 flex flex-col gap-2">
        <p className="flex flex-col gap-2">
          <label className="font-semibold text-stone-600">TITLE</label>
          <input className=" bg-stone-200 rounded-sm  border-b-2 border-stone-900 focus:outline-none" type="text" />
        </p>
        <p className="flex flex-col">
          <label className="font-semibold text-stone-600">DESCRIPTION</label>
          <input className=" bg-stone-200 rounded-sm  border-b-2 border-stone-900 focus:outline-none" type="text" />
        </p>
        <p className="flex flex-col"></p>
        <label className="font-semibold text-stone-600">DUE DATE</label>
        <input className="w-full bg-stone-200 rounded-sm  border-b-2 border-stone-900 focus:outline-none" type="date"/>
      </div>
    </section>
  );
}
