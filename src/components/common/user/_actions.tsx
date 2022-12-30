import Button from '@/components/ui-kit/button/button';
import DropDown from '@/components/ui-kit/drop-down/drop-down';
import Icon from '@/components/ui-kit/icon/icon';
import { ButtonVariant, IconVariant } from '@/enums';
import classNames from 'classnames/bind';
import styles from './user.module.scss';

const cx = classNames.bind(styles);

export default function UserActions({
  onMoveToStage,
  onRemoveUser,
  onUpdateUser
}: {
  onMoveToStage: () => void;
  onRemoveUser: () => void;
  onUpdateUser: () => void;
}): JSX.Element {
  const menu = [
    {
      id: 1,
      node: (
        <Button
          onClick={onMoveToStage}
          variant={ButtonVariant.LINK}>
          Move to stage
        </Button>
      )
    },
    {
      id: 2,
      node: (
        <Button
          onClick={onUpdateUser}
          variant={ButtonVariant.LINK}>
          Update user
        </Button>
      )
    },
    {
      id: 3,
      node: (
        <Button
          onClick={onRemoveUser}
          variant={ButtonVariant.LINK}>
          Remove user
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
