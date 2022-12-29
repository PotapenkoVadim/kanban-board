import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { ButtonVariant } from '@/enums';

const cx = classNames.bind(styles);

export default function Button({
  children,
  variant,
  className
}: {
  children: ReactNode;
  variant: ButtonVariant;
  className?: string;
}): JSX.Element {
  return (
    <button className={cx(['button', `button__${variant}`, className])}>
      {children}
    </button>
  );
}
