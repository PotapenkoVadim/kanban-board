import { UserModel } from '@/model/user';
import ModalState from './modal-state';

export default interface BindUserModalState extends ModalState {
  user: UserModel;
}
