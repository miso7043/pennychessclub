import React, { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, title }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 p-6 relative flex flex-col max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {title && <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>}
        <div className="overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
