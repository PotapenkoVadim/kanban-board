import classNames from 'classnames/bind';
import styles from './stage.module.scss';
import Modal from '@/components/ui-kit/modal/modal';
import { close } from '@/store/modals/stage';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks';
import FormStage from '@/components/forms/stage/stage';
import { Stage } from '@/model/stage';
import { addStage } from '@/store/stage';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function StageModal(): JSX.Element {
  const dispatch = useDispatch();
  const {
    isOpen,
    title,
    stage: updatedStage
  } = useAppSelector((state) => state.stageModal);

  const [stage, setStage] = useState(new Stage());

  useEffect(() => {
    if (updatedStage) {
      setStage(updatedStage);
    }
  }, [updatedStage]);

  const closeModal = (): void => {
    dispatch(close());
  };

  const handleSubmit = (data: Stage): void => {
    dispatch(addStage(data));
    dispatch(close());
  };

  return (
    <Modal
      title={title}
      onClose={closeModal}
      isOpen={isOpen}>
      <div className={cx('stage')}>
        <FormStage
          stage={stage}
          onSubmit={handleSubmit} />
      </div>
    </Modal>
  );
}
