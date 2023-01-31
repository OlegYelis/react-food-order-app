import { BackdropWrapper, ModalWrapper } from './Modal.styled';
import ReactDOM from 'react-dom';

const Backdrop = () => {
  return <BackdropWrapper></BackdropWrapper>;
};

const ModalWindow = ({ children }) => {
  return (
    <ModalWrapper>
      <div>{children}</div>
    </ModalWrapper>
  );
};

const portalElement = document.getElementById('overlays');

export const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};
