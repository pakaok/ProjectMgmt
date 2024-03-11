import { Input } from "./Input";

export default function AddProject() {
  return (
    <section className="w-[35rem] mx-16">
      <p className=" flex justify-end gap-4">
        <button className="font-semibold px-4 md:text-lg" >Cancel</button>
        <button className="font-semibold px-4 py-1 bg-stone-800 text-stone-100 md:text-lg rounded-md" >Save</button>
      </p>
      <div className="my-8 flex flex-col gap-2">
      <Input label={"title"}/>
    <Input textarea label={"description"}/>
        <Input label={'due date'} type="date"/>
      </div>
    </section>
  );
}
