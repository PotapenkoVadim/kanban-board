import ModalState from './modal-state';

export default interface ConfirmationModalState extends ModalState {
  acceptAction?: () => void;
}
