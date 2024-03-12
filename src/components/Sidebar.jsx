import Button from "./Button";

export default function SideBar({ onStartProject, projects }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-black rounded-tr-lg md:w-72">
        <h1 className="font-bold text-stone-50 mb-8 md:text-lg uppercase">
          Your Projects
        </h1>
        <div>
          <Button onClick={onStartProject}>+ Add Project</Button>
        </div>
        <ul className="mt-5">
          {projects.map((project) => (
            <li key={project.id} className="px-2 py-1 my-1 text-stone-400 w-full hover:bg-stone-700 hover:text-stone-100 rounded-sm">
              {project.title}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
