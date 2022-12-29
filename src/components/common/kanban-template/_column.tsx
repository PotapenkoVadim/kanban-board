import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import User from '@/components/common/user/user';
import { Stage } from '@/model/stage';
import Button from '@/components/ui-kit/button/button';
import Icon from '@/components/ui-kit/icon/icon';
import { ButtonVariant, IconVariant } from '@/enums';
import DropDown from '@/components/ui-kit/drop-down/drop-down';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumn({
  stage,
  handleUpdateAction,
  handleRemoveAction
}: {
  stage: Stage;
  handleUpdateAction: (stage: Stage) => void;
  handleRemoveAction: (stage: Stage) => void;
}): JSX.Element {
  const menu = [
    {
      id: 1,
      node: (
        <Button
          onClick={() => handleUpdateAction(stage)}
          variant={ButtonVariant.LINK}
        >
          Update stage
        </Button>
      )
    },
    {
      id: 2,
      node: (
        <Button
          onClick={() => handleRemoveAction(stage)}
          variant={ButtonVariant.LINK}
        >
          Remove stage
        </Button>
      )
    }
  ];

  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>
        <span className={cx('kanban__column-title')}>{stage.title}</span>

        <DropDown menu={menu}>
          <Button variant={ButtonVariant.ICON}>
            <Icon variant={IconVariant.SETTINGS} />
          </Button>
        </DropDown>
      </div>
      <div className={cx('kanban__column-content')}>
        <User />
      </div>
    </div>
  );
}
