import { createContext } from "react";
import { ModalState } from "./ModalProvider";

export type ModalContextProps = { 
    open: (props: Omit<ModalState, "open">) => void,
    close: () => void
}

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);