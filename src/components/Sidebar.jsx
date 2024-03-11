export default function SideBar() {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-black rounded-tr-lg md:w-72">
        <h1 className="font-bold text-stone-50 mb-8 md:text-lg uppercase">
          Your Projects
        </h1>
        <div>
          <button className=" text-stone-400 px-4 py-2 bg-stone-700 rounded text-xs md:text-base hover:text-stone-100 hover:bg-stone-400">
            + Add project
          </button>
        </div>
        <ul></ul>
      </aside>
    </>
  );
}
