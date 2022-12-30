import FormUser from '@/components/forms/user/user';
import Modal from '@/components/ui-kit/modal/modal';
import { useAppSelector } from '@/hooks';
import { UserModel } from '@/model/user';
import { close } from '@/store/modals/user';
import { bindUserToStage } from '@/store/stage';
import { addUser, updateUser } from '@/store/user';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './user.module.scss';

const cx = classNames.bind(styles);

export default function UserModal(): JSX.Element {
  const dispatch = useDispatch();
  const { isOpen, title, stageID, user } = useAppSelector(
    (state) => state.userModal
  );

  const closeModal = (): void => {
    dispatch(close());
  };

  const handleSubmit = (data: UserModel): void => {
    if (user) {
      dispatch(updateUser(data));
    } else {
      dispatch(addUser(data));
      dispatch(bindUserToStage({ stageID, userID: data.id }));
    }

    dispatch(close());
  };

  return (
    <Modal
      title={title}
      onClose={closeModal}
      isOpen={isOpen}>
      <div className={cx('user')}>
        <FormUser
          onSubmit={handleSubmit}
          user={user} />
      </div>
    </Modal>
  );
}
