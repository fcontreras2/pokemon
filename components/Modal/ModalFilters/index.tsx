import { ModalState } from "../context/ModalProvider";
import { ModalFiltersContent } from "./ModalFiltersContent";
import { ModalFiltersFooter } from "./ModalFiltersFooter";
import { ModalFiltersHeader } from "./ModalFiltersHeader";

const ModalFilters = (): Omit<ModalState, "open"> => {
  
  return {
    header:<ModalFiltersHeader />,
    content: <ModalFiltersContent />,
    footer: <ModalFiltersFooter />,
  };
};

export default ModalFilters;
