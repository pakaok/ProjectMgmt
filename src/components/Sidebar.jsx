import Button from "./Button";


export default function SideBar({onStartProject}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-black rounded-tr-lg md:w-72">
        <h1 className="font-bold text-stone-50 mb-8 md:text-lg uppercase">
          Your Projects
        </h1>
        <div>
          <Button onClick={onStartProject} >+ Add Project</Button>
        </div>
        <ul></ul>
      </aside>
    </>
  );
}
