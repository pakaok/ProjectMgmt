import NewTasks from "./NewTasks";

export default function Tasks({ projectTasks, onAdd, onDelete }) {
  console.log(projectTasks);
  return (
    <section>
      <div>
        <h1 className="text-xl font-semibold">Tasks</h1>
        <NewTasks onAdd={onAdd} />
      </div>
      {projectTasks.length === 0 && <p className="p-4 mt-4">There is No task</p>}
      {projectTasks.length > 0 && (
        <ul className="mt-4">
          {projectTasks.map((projectTask) => (
            <li key={projectTask.taskId} className="w-[30rem] flex justify-between my-4 px-4 py-2 bg-stone-200 rounded-md">
              <span>{projectTask.text}</span>
              <button onClick={()=>onDelete(projectTask.taskId)} className="text-stone-700 hover:text-red-500" >Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
