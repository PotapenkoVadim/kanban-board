import { StageModel } from '@/model/stage';
import ModalState from './modal-state';

export default interface StageModalState extends ModalState {
  stage?: StageModel | null;
}
