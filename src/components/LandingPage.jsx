import NoProjectImg from '../assets/no-projects.png';
export default function LandingPage() {
  return (
    <section className='flex flex-col items-center gap-5 min-w-80 mx-16 my-10'>
        <img src={NoProjectImg} alt="No Project"  className='w-20 mx-auto'/>
      <h1 className='font-bold md:text-lg text-stone-700'>No Project Selected</h1>
      <h2 className='font-medium text-stone-500'>Select a project or get started with a new one</h2>
      <button className=" text-stone-400 py-2 px-4 bg-stone-700 rounded text-xs md:text-base hover:text-stone-100 hover:bg-stone-400">
        Create Project
      </button>
    </section>
  );
}
