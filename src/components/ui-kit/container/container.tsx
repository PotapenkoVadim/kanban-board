import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './container.module.scss';

const cx = classNames.bind(styles);

export default function Container({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return <div className={cx(['container', className])}>{children}</div>;
}
