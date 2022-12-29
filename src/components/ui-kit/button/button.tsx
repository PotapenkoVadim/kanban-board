import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode
} from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';
import { ButtonVariant } from '@/enums';

const cx = classNames.bind(styles);

export default function Button({
  children,
  variant,
  onClick,
  className,
  ...props
}: {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={cx(['button', `button__${variant}`, className])}
      {...props}
    >
      {children}
    </button>
  );
}
