import classNames from 'classnames/bind';
import styles from './layout.module.scss';
import Container from '@/components/ui-kit/container/container';
import Logo from '@/components/ui-kit/logo/logo';

const cx = classNames.bind(styles);

export default function Header(): JSX.Element {
  return (
    <header className={cx('layout__header')}>
      <Container className={cx('layout__container')}>
        <Logo />
      </Container>
    </header>
  );
}
