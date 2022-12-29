import classNames from 'classnames/bind';
import styles from './stage.module.scss';
import Modal from '@/components/ui-kit/modal/modal';
import { close } from '@/store/modals/stage';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

export default function StageModal(): JSX.Element {
  const dispatch = useDispatch();
  const { isOpen, title } = useAppSelector((state) => state.stageModal);

  useEffect(() => console.log('click123', isOpen), [isOpen]);

  const closeModal = (): void => {
    dispatch(close());
  };

  return (
    <Modal
      title={title}
      onClose={closeModal}
      isOpen={isOpen}>
      <div className={cx('stage')}>Stage modal</div>
    </Modal>
  );
}
