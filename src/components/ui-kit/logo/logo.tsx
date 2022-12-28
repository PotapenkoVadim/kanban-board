import { Roboto } from '@next/font/google';
import classNames from 'classnames/bind';
import styles from './logo.module.scss';
import { configuration } from '@/configuration';

const cx = classNames.bind(styles);
const logoName = configuration.logoName;
const robotoFont = Roboto({
  weight: '700'
});

export default function Logo(): JSX.Element {
  return <div className={cx(['logo', robotoFont.className])}>{logoName}</div>;
}
