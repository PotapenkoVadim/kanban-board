import classNames from 'classnames/bind';
import styles from './stage.module.scss';
import Modal from '@/components/ui-kit/modal/modal';
import { close } from '@/store/modals/stage';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks';
import FormStage from '@/components/forms/stage/stage';
import { StageModel } from '@/model/stage';
import { addStage, updateStage } from '@/store/stage';

const cx = classNames.bind(styles);

export default function StageModal(): JSX.Element {
  const dispatch = useDispatch();
  const { stageModal, user } = useAppSelector((state) => state);

  const closeModal = (): void => {
    dispatch(close());
  };

  const handleSubmit = (data: StageModel): void => {
    dispatch(stageModal.stage ? updateStage(data) : addStage(data));
    dispatch(close());
  };

  return (
    <Modal
      title={stageModal.title}
      onClose={closeModal}
      isOpen={stageModal.isOpen}
    >
      <div className={cx('stage')}>
        <FormStage
          users={user.items}
          stage={stageModal.stage}
          onSubmit={handleSubmit}
        />
      </div>
    </Modal>
  );
}
