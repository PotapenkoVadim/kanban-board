import { Stage } from '@/model/stage';
import ModalState from './modal-state';

export default interface StageModalState extends ModalState {
  stage?: Stage | null;
}
