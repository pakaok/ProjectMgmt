import { useRef } from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import { createPortal } from "react-dom"
export const Modal= forwardRef( function Modal({children},ref){
    const modalRef = useRef()
    useImperativeHandle(ref,()=>{
        return {
            open(){
                modalRef.current.showModal()
            }
        }
    })
    return createPortal(
        <dialog ref={modalRef} className="py-2 px-4 rounded-md text-center">
            <h1 className='font-bold md:text-lg text-stone-700 mb-4' >Every field must not be empty</h1>
            <h2 className='font-medium text-stone-500 mb-4'>{children}</h2>
            <form method="dialog" className="mt-4">
                <button className="text-stone-400 px-4 py-2 bg-stone-700 rounded text-xs md:text-base hover:text-stone-100 hover:bg-stone-400">Close</button>
            </form>
        </dialog>,document.getElementById('modal-root')
    )
})