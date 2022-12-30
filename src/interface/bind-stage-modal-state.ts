import { StageModel } from '@/model/stage';
import ModalState from './modal-state';

export default interface BindStageModalState extends ModalState {
  stage: StageModel;
}
