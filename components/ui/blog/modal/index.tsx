"use client";

import React, { ReactNode, useEffect } from "react";
import XMarkIcon from "../x-mark";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div className="position-fixed start-0 end-0 bottom-0 w-100 h-100 d-flex align-items-center justify-content-center modal">
      <div className="container-button">
        <button
          onClick={onClose}
          className="position-absolute text-white"
        >
          <XMarkIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
