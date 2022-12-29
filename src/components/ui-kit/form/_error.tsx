import classNames from 'classnames/bind';
import styles from './form.module.scss';

const cx = classNames.bind(styles);

export default function FormError({
  errorText
}: {
  errorText?: string;
}): JSX.Element {
  return <span className={cx('form__error')}>{errorText}</span>;
}
