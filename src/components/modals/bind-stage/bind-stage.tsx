import FormBindStage from '@/components/forms/bind-stage/bind-stage';
import Modal from '@/components/ui-kit/modal/modal';
import { BindStageSchema } from '@/forms';
import { useAppSelector } from '@/hooks';
import { close } from '@/store/modals/bind-stage';
import { bindUserToStage } from '@/store/stage';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './bind-stage.module.scss';

const cx = classNames.bind(styles);

export default function BindStageModal(): JSX.Element {
  const dispatch = useDispatch();
  const { bindStageModal, user } = useAppSelector((state) => state);

  const closeModal = (): void => {
    dispatch(close());
  };

  const handleSubmit = (data: BindStageSchema): void => {
    dispatch(
      bindUserToStage({
        stageID: bindStageModal.stage.id,
        userID: data.userID
      })
    );
    dispatch(close());
  };

  return (
    <Modal
      title={bindStageModal.title}
      onClose={closeModal}
      isOpen={bindStageModal.isOpen}
    >
      <div className={cx('bind-user')}>
        <FormBindStage
          onSubmit={handleSubmit}
          users={user.items} />
      </div>
    </Modal>
  );
}
