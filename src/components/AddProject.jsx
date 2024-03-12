import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";
export default function AddProject({ onAdd, onCancel }) {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();
  const modal = useRef()
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = desc.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle == "" || enteredDesc=="" || enteredDueDate==""){
      modal.current.open()
      return;
    }
    onAdd({ title: enteredTitle, desc: enteredDesc, dueDate: enteredDueDate });
  }

  return (
    <>
    <Modal ref={modal}>Please enter valid inputs.</Modal>
    <section className="w-[35rem] mx-16">
      <p className=" flex justify-end gap-4">
        <button onClick={onCancel} className="font-semibold px-4 md:text-lg">Cancel</button>
        <button
          onClick={handleSave}
          className="font-semibold px-4 py-1 bg-stone-800 text-stone-100 md:text-lg rounded-md"
        >
          Save
        </button>
      </p>
      <div className="my-8 flex flex-col gap-2">
        <Input ref={title} label={"title"} />
        <Input ref={desc} textarea label={"description"} />
        <Input ref={dueDate} label={"due date"} type="date" />
      </div>
    </section>
    </>
  );
}
