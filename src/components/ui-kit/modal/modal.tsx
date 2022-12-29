import { ReactNode, useEffect } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames/bind';
import styles from './modal.module.scss';
import Button from '@/components/ui-kit/button/button';
import { ButtonVariant, IconVariant } from '@/enums';
import Icon from '@/components/ui-kit/icon/icon';

const cx = classNames.bind(styles);

export default function Modal({
  isOpen,
  onClose,
  children,
  title
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}): JSX.Element {
  useEffect(() => ReactModal.setAppElement('body'), []);

  return (
    <ReactModal
      style={{ overlay: { zIndex: 10 } }}
      isOpen={isOpen}>
      <div className={cx('modal__content')}>
        <div className={cx('modal__header')}>
          <span className={cx('modal__title')}>{title}</span>

          <Button
            onClick={onClose}
            className={cx('modal__close')}
            variant={ButtonVariant.ICON}
          >
            <Icon variant={IconVariant.CLOSE} />
          </Button>
        </div>

        <div className={cx('modal__body')}>{children}</div>
      </div>
    </ReactModal>
  );
}
