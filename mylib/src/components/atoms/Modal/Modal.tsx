import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

type ModalProps = {
  /** The contents of the modal */
  children: ReactElement[] | ReactElement;
  /** If true the modal will appear */
  showModal: boolean;
  /** Function to set "showModal" to false */
  onRequestClose: (e: boolean) => void;
  /** Stop the contents of the modal from scrolling */
  noScroll?: boolean;
};

const Modal = ({
  children,
  showModal,
  onRequestClose,
  noScroll = false,
}: ModalProps) => {
  const root = document.getElementById('modal-root');
  if (root === null) return <></>;
  return ReactDOM.createPortal(
    showModal ? (
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center ${styles.background} z-[9999999]`}
        onClick={() => onRequestClose(true)}
      >
        <div
          className={`${
            styles.body
          } shadow-2xl rounded-md bg-skin-page-forground max-w-[95%] max-h-[90%] px-6 py-3 ${
            noScroll ? 'overflow-visible' : 'overflow-y-auto'
          }`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    ) : null,
    root
  );
};

export const ModalContainer = () => {
  return <div id="modal-root"></div>;
};

export default Modal;
