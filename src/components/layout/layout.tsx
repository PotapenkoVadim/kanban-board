import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './layout.module.scss';
import LayoutHeader from './_header';

const cx = classNames.bind(styles);

export default function Layout({
  children
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={cx('layout')}>
      <LayoutHeader />
      {children}
    </div>
  );
}
