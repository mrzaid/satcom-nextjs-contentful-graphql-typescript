import React from "react";
type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="absolute z-[998]">
      <div
        className="bg-black opacity-80 fixed left-0 right-0 top-0 bottom-0 z-[999]"
        onClick={onClose}
      ></div>
      <div className="modal-content-skin top-[0] left-0 md:top-[50%] w-[100%] md:w-fit md:left-[50%] fixed md:translate-x-[-50%] md:right-auto bottom-auto md:translate-y-[-50%] z-[99999] h-[100vh] md:max-h-[85vh] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Modal;