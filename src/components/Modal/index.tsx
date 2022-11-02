import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { ModalProps } from "./types";
import Button from "../../components/Button";

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  setOpen,
  onOkClick,
  title,
  showButtons,
  className,
  okLabel,
  cancelLabel,
}) => {
  if (!open) return null;

  const closeHandler = () => {
    setOpen(false);
  };

  const okHandler = () => {
    if (onOkClick) {
      onOkClick();
    }
    closeHandler();
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-background" onClick={closeHandler} />
      <div className={`${className && className} modal-window`}>
        <div className="modal-header-and-content">
          <div className="modal-header">
            <span>{title}</span>
          </div>
          <div className="modal-content">{children}</div>
        </div>
        {showButtons && (
          <div className="modal-footer">
            <Button variant="outlined" onClick={closeHandler}>
              {cancelLabel || "Cancel"}
            </Button>
            <Button onClick={okHandler}>{okLabel || "OK"}</Button>
          </div>
        )}
      </div>
    </>,
    document.body
  );
};

export default Modal;
