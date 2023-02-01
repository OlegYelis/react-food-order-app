import { BackdropWrapper, ModalWrapper } from './Modal.styled';
import ReactDOM from 'react-dom';

const Backdrop = ({ onHideCart }) => {
  return <BackdropWrapper onClick={onHideCart}></BackdropWrapper>;
};

const ModalWindow = ({ children }) => {
  return (
    <ModalWrapper>
      <div>{children}</div>
    </ModalWrapper>
  );
};

const portalElement = document.getElementById('overlays');

export const Modal = ({ onHideCart, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};
