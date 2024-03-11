import NoProjectImg from '../assets/no-projects.png';
import Button from './Button';
export default function LandingPage({onStartProject}) {
  return (
    <section className='flex flex-col items-center gap-5 min-w-80 mx-16 my-10'>
        <img src={NoProjectImg} alt="No Project"  className='w-20 mx-auto'/>
      <h1 className='font-bold md:text-lg text-stone-700'>No Project Selected</h1>
      <h2 className='font-medium text-stone-500'>Select a project or get started with a new one</h2>
      <Button onClick={onStartProject} >Create Project</Button>
    </section>
  );
}
