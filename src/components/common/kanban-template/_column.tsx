import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import User from '@/components/common/user/user';
import { Stage } from '@/model/stage';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumn({
  stage
}: {
  stage: Stage;
}): JSX.Element {
  console.log(stage);

  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>{stage.title}</div>
      <div className={cx('kanban__column-content')}>
        <User />
      </div>
    </div>
  );
}
