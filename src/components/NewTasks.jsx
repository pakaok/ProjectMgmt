import { useRef } from "react";

export default function NewTasks({onAdd}){
    const inputTask = useRef()
    function handleAddTask(){
        onAdd(inputTask.current.value)
        inputTask.current.value = ""
    }
    return (
        <div className="flex gap-4 mt-4">
            <input ref={inputTask} type="text" className="w-64 bg-stone-200 border border-stone-400 rounded-sm px-2 py-1"/>
            <button onClick={handleAddTask} className=" text-stone-700 hover:text-stone-400" >Add Task</button>
        </div>
    );
}