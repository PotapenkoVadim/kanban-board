import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import Button from '@/components/ui-kit/button/button';
import Icon from '@/components/ui-kit/icon/icon';
import { IconVariant, ButtonVariant } from '@/enums';
import DropDown from '@/components/ui-kit/drop-down/drop-down';

const cx = classNames.bind(styles);

export default function KanbanTemplateHeader({
  handleClick
}: {
  handleClick: () => void;
}): JSX.Element {
  const menu = [
    {
      id: 1,
      node: (
        <Button
          onClick={handleClick}
          variant={ButtonVariant.LINK}>
          Add new stage
        </Button>
      )
    }
  ];

  return (
    <div className={cx('kanban__header')}>
      <h1 className={cx('kanban__title')}>Kanban Board</h1>

      <DropDown menu={menu}>
        <Button variant={ButtonVariant.ICON}>
          <Icon variant={IconVariant.SETTINGS} />
        </Button>
      </DropDown>
    </div>
  );
}
