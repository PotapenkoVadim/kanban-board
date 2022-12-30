import FormBindUser from '@/components/forms/bind-user/bind-user';
import Modal from '@/components/ui-kit/modal/modal';
import { BindUserSchema } from '@/forms/bind-user';
import { useAppSelector } from '@/hooks';
import { close } from '@/store/modals/bind-user';
import { bindUserToStage } from '@/store/stage';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './bind-user.module.scss';

const cx = classNames.bind(styles);

export default function BindUserModal(): JSX.Element {
  const dispatch = useDispatch();
  const { bindUserModal, stage } = useAppSelector((state) => state);

  const closeModal = (): void => {
    dispatch(close());
  };

  const handleSubmit = (data: BindUserSchema): void => {
    dispatch(
      bindUserToStage({
        stageID: data.stageID,
        userID: bindUserModal.user.id
      })
    );
    dispatch(close());
  };

  return (
    <Modal
      title={bindUserModal.title}
      onClose={closeModal}
      isOpen={bindUserModal.isOpen}
    >
      <div className={cx('bind-user')}>
        <FormBindUser
          stages={stage.items}
          onSubmit={handleSubmit} />
      </div>
    </Modal>
  );
}
