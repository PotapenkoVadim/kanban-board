import Button from '@/components/ui-kit/button/button';
import DropDown from '@/components/ui-kit/drop-down/drop-down';
import Icon from '@/components/ui-kit/icon/icon';
import { ButtonVariant, IconVariant } from '@/enums';
import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumnActions({
  onUpdateStage,
  onRemoveStage,
  onAddUser
}: {
  onUpdateStage: () => void;
  onRemoveStage: () => void;
  onAddUser: () => void;
}): JSX.Element {
  const settingsMenu = [
    {
      id: 1,
      node: (
        <Button
          onClick={onUpdateStage}
          variant={ButtonVariant.LINK}>
          Update stage
        </Button>
      )
    },
    {
      id: 2,
      node: (
        <Button
          onClick={onRemoveStage}
          variant={ButtonVariant.LINK}>
          Remove stage
        </Button>
      )
    }
  ];

  const addingMenu = [
    {
      id: 1,
      node: (
        <Button
          onClick={onAddUser}
          variant={ButtonVariant.LINK}>
          Add new user
        </Button>
      )
    }
  ];

  return (
    <div className={cx('kanban__column-actions')}>
      <DropDown menu={addingMenu}>
        <Button variant={ButtonVariant.ICON}>
          <Icon variant={IconVariant.ADD} />
        </Button>
      </DropDown>

      <DropDown menu={settingsMenu}>
        <Button variant={ButtonVariant.ICON}>
          <Icon variant={IconVariant.SETTINGS} />
        </Button>
      </DropDown>
    </div>
  );
}
