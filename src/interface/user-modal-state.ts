import { UserModel } from '@/model/user';
import ModalState from './modal-state';

export default interface UserModalState extends ModalState {
  user?: UserModel;
  stageID?: string;
}
