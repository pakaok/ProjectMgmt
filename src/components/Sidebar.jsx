import Button from "./Button";

export default function SideBar({
  onStartProject,
  projects,
  onSelect,
  selectedProject,
}) {
  console.log(projects,"sidbar")
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-black rounded-tr-lg md:w-72">
        <h1 className="font-bold text-stone-50 mb-8 md:text-lg uppercase">
          Your Projects
        </h1>
        <div>
          <Button onClick={onStartProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => {
            let cssClass =
              "px-2 py-1 my-1 text-left w-full hover:bg-stone-600 hover:text-stone-100 rounded-sm";
            if (project.id == selectedProject) {
              cssClass += " text-stone-100 bg-stone-700";
            } else {
              cssClass += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  onClick={() => {
                    onSelect(project.id);
                  }}
                  className={cssClass}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
