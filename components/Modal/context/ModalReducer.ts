import { ModalState } from "./ModalProvider";

type ModalAction =
    | { type: 'open', payload:  ModalState}
    | { type: 'close' }

export const ModalReducer = (state: ModalState, action: ModalAction):ModalState => {
    switch(action.type) {
        case 'open': 
            return {
                ...state,
                ...action.payload,
                open: true,
            }
        
        case 'close':
            return {
                ...state,
                open: false,
            }
        break;
    }
    return {...state};
}