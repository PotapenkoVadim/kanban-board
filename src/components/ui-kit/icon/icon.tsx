import classNames from 'classnames/bind';
import styles from './icon.module.scss';
import { IconColor, IconVariant } from '@/enums';

const cx = classNames.bind(styles);

export default function Icon({
  variant,
  color = IconColor.BLACK,
  className
}: {
  variant: IconVariant;
  color?: IconColor;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={cx([
        'icon',
        [`icon__${variant}`],
        [`icon_${color}`],
        className
      ])}
    />
  );
}
