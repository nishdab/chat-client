import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ModalProps } from "@/types/types";

const Modal: React.FC<ModalProps> = ({ showModal, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showModal &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, onClose]);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 overflow-hidden z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={modalRef}
            className="relative z-50 bg-white max-w-3xl w-full mx-auto rounded-lg overflow-hidden"
          >
            <div className="flex items-start justify-end p-5 border-b border-solid border-gray-300 rounded-t">
              <button
                className="bg-transparent border-0 text-black float-right"
                onClick={onClose}
              >
                <Image
                  height={30}
                  width={30}
                  src="/close-circle.svg"
                  alt=""
                  className="h-[30px] cursor-pointer"
                />
              </button>
            </div>
            <div className="p-6 flex-auto">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
