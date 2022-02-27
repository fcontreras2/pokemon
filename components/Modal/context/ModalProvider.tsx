import { useEffect, useReducer, useState } from "react"
import Modal from ".."
import { ModalContext } from "./ModalContext"
import { ModalReducer } from "./ModalReducer"

export type ModalState = {
    open?: boolean;
    header?: JSX.Element | JSX.Element[] |  string;
    content: JSX.Element | JSX.Element[],
    footer?: JSX.Element | JSX.Element
}

const INITIAL_STATE: ModalState = {
    open: false,
    content: <></>
}

type Props  = {
    children: JSX.Element | JSX.Element[];
}


export const ModalProvider = ({ children }: Props ) => {

    const [{ open:isOpen, header, content, footer }, dispatch] = useReducer(ModalReducer, INITIAL_STATE)
    
    const [eventOpen, setEventOpen] = useState<boolean>();

    const open = (state:Omit<ModalState, "open"> = INITIAL_STATE):void => {
        dispatch({type: 'open', payload: state})
    }

    const close = () => {
        dispatch({type: 'close'})
    }

    useEffect(() => {
      if (!isOpen) {
        setTimeout(() => {
          setEventOpen(isOpen);
        }, 400);        
      } else {
        setEventOpen(isOpen)
      } 
    }, [isOpen])

    return (
      <ModalContext.Provider
        value={{
          open,
          close,
        }}
      >
        {eventOpen && (
          <Modal 
            open={isOpen}
            header={header}
            content={content}
            footer={footer}
          />
        )}
        {children}
      </ModalContext.Provider>
    );
} 
