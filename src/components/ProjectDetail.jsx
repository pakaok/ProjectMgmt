import Button from "./Button";
export default function ProjectDetail({ project }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month:'short',
        day:'numeric'
    })
  console.log(project);
  return (
    <div className="w-[35rem] mt-8">
      <header className=" mb-4 pt-2 px-2 pb-8 bg-stone-300 border-b-2 border-b-stone-100">
        <div className="flex justify-between items-center">
          <h1 className="font-bold md:text-4xl text-stone-700">
            {project.title}
          </h1>
          <Button>Delete</Button>
        </div>
        <p className="font-semibold text-stone-500">{formattedDate}</p>
        <p className="font-semibold mt-8 whitespace-pre-wrap" >{project.desc}</p>
      </header>
    </div>
  );
}
