import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import CloseIcon from '../images/closeIcon.svg';

const elementHtmlToModal = document.getElementById('modal');

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  priority?: number;
  isLayout?: boolean;
  isFull?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  priority = 1,
  isLayout = true,
  isFull
}) => {
  useEffect(() => {
    const handleDownKeyEsc = (event: KeyboardEvent): void => {
      event.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleDownKeyEsc);
    return () => {
      document.removeEventListener('keydown', handleDownKeyEsc);
    };
  }, [onClose]);
  const modalWindowContent = (
    <div
      className="modal-backdrop flex justify-center p-4 overflow-hidden items-center"
      onClick={onClose}
      style={{ zIndex: priority }}
    >
      <div
        className={`${isLayout ? 'w-full bg-white mx-auto shadow rounded-2xl border-t-2 border-[#F47D32] p-4' : ''} ${isFull ? '' : ' fullHd md:w-[70%] '} fullHd relative`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}{' '}
        <span
          className="btn-close-map w-[40px] h-[40px] ml-2 mt-0.5 cursor-pointer absolute top-[20px] right-[20px] bg-white flex items-center justify-center"
          onClick={onClose}
        >
          <img src={CloseIcon} alt="closeicon" className="" />
        </span>
      </div>
    </div>
  );
  return (
    elementHtmlToModal &&
    ReactDOM.createPortal(modalWindowContent, elementHtmlToModal)
  );
};

export default Modal;
