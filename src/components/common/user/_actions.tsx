import Button from '@/components/ui-kit/button/button';
import DropDown from '@/components/ui-kit/drop-down/drop-down';
import Icon from '@/components/ui-kit/icon/icon';
import { ButtonVariant, IconVariant } from '@/enums';
import classNames from 'classnames/bind';
import styles from './user.module.scss';

const cx = classNames.bind(styles);

export default function UserActions({
  onClick
}: {
  onClick: () => void;
}): JSX.Element {
  const menu = [
    {
      id: 1,
      node: (
        <Button
          onClick={onClick}
          variant={ButtonVariant.LINK}>
          Move to stage
        </Button>
      )
    }
  ];

  return (
    <div className={cx('user__actions')}>
      <DropDown menu={menu}>
        <Button variant={ButtonVariant.ICON}>
          <Icon variant={IconVariant.SETTINGS} />
        </Button>
      </DropDown>
    </div>
  );
}
