import { KeyboardEvent, MouseEvent, useContext, useEffect, useRef } from "react";
import { ModalContext } from "./context/ModalContext";
import { ModalState } from "./context/ModalProvider";

const Modal = ({ open, header, content, footer }: ModalState) => {
  
  const { close } = useContext(ModalContext);

  const handleClick = (event:MouseEvent<HTMLElement>) => {
    const { target } = event;
    if ((target as Element).classList.contains('modal__background')) {
      close()
    }
  }

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("class", "overflow-hidden");

    window.addEventListener("keydown", (event: any) => {
      const { key } = event;
      if (String(key) === "Escape") {
        close();
      }
    });

    return () => {
      body?.setAttribute("class", "overflow-auto");
      window.removeEventListener("keydown", () => {});
    };
  }, []);


  return (
    <div
      onClick={handleClick}
      className={`modal__background  ${
        open ? "--open" : "close"
      }  fixed top-0 left-0 flex items-center justify-center z-50 h-screen w-full`}
    >
      <div className={`modal w-full flex justify-center`}>
        <div className="modal__container m-0 w-1/2 relative rounded-lg">
          <div className="px-8 py-6 bg-blue-dark-400 block rounded-t-lg">
            {header}
          </div>
          <div className="bg-white  p-8">{content}</div>
          <div className=" flex justify-end bg-white border-t-2 border-blue-dark-50  border-t-ghost-500 rounded-b-lg px-8 py-4">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
