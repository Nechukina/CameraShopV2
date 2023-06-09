import ReactFocusLock from 'react-focus-lock';
import clsx from 'clsx';
import { useCallback, useEffect, useRef } from 'react';
import { KeyCode } from '../../../const';

type ModalProps = {
  isOpen: boolean;
  onCloseClick: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onCloseClick, children }: ModalProps): JSX.Element {
  const modalRef = useRef(null);

  const onEscapeKeydown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyCode.Esc) {
      onCloseClick();
    }
  }, [onCloseClick]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', onEscapeKeydown);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onEscapeKeydown);
    };
  }, [isOpen, onEscapeKeydown]);

  return (
    <ReactFocusLock returnFocus disabled={!isOpen}>
      <div
        className={clsx('modal', isOpen && 'is-active')}
        ref={modalRef}
        tabIndex={-1}
        data-testid="modal"
      >
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={onCloseClick}></div>
          <div className="modal__content">
            {children}
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={onCloseClick}
            >
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ReactFocusLock>
  );
}

export default Modal;
