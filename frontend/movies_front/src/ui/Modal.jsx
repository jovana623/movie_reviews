import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import "../styles/components/Modal.scss";

export const ModalContext = createContext();

/* eslint-disable react/prop-types */
function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");

  const close = () => setOpenModal();
  const open = (modal) => setOpenModal(modal);

  return (
    <ModalContext.Provider value={{ openModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, opens }) {
  const { open } = useContext(ModalContext);
  return <div onClick={() => open(opens)}>{children}</div>;
}

function Window({ children, name }) {
  const { openModal, close } = useContext(ModalContext);

  if (name !== openModal) return null;

  return createPortal(
    <div className="modal">
      <div className="modal__window">
        <button onClick={close}>
          <HiXMark />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.OpenButton = OpenButton;
Modal.Window = Window;
export default Modal;
