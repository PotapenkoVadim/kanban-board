import Button from '@/components/ui-kit/button/button';
import Modal from '@/components/ui-kit/modal/modal';
import { ButtonVariant } from '@/enums';
import { useAppSelector } from '@/hooks';
import { close } from '@/store/modals/confirmation';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import styles from './confirmation.module.scss';

const cx = classNames.bind(styles);

export default function ConfirmationModal(): JSX.Element {
  const dispatch = useDispatch();
  const { isOpen, title, acceptAction } = useAppSelector(
    (state) => state.confirmationModal
  );

  const closeModal = (): void => {
    dispatch(close());
  };

  return (
    <Modal
      title={title}
      onClose={closeModal}
      isOpen={isOpen}>
      <div className={cx('confirmation')}>
        <Button
          onClick={acceptAction}
          className={cx('confirmation__button')}
          variant={ButtonVariant.PRIMARY}
        >
          Accept
        </Button>

        <Button
          onClick={closeModal}
          className={cx('confirmation__button')}
          variant={ButtonVariant.SECONDARY}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
