import "./Modal.css";
import { useImperativeHandle, forwardRef, useState } from "react";

const Modal = ({modal}, props) => {
    const [open, setOpen] = useState(false);
    console.log(open)
    
    useImperativeHandle(modal, () => {
        return {
            toggleModal: () => {
                setOpen(!open)
            }
        }
    })

  return (
    <div onClick={() => setOpen(false)} ref={modal} className={`overlay ${open ? "active" : ""}`}>
        <div onClick={(e) => e.stopPropagation() } c className="modal">Are you sure deleted this product?
            <div className="mt-[80px] flex items-center gap-[40px]">
                <button onClick={() => setOpen(false)} className="py-1 px-6 bg-red-500  border-none rounded-xl text-white active:bg-red-700 transform active:scale-90 transition">No</button>
                <button onClick={() => setOpen(false)} className="py-1 px-6 bg-sky-500  border-none rounded-xl text-white  active:bg-sky-700 transform active:scale-90 transition">Yes</button>
            </div>
        </div>
    </div>
  )
}

export default forwardRef(Modal)