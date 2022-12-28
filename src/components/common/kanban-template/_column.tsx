import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import User from '@/components/common/user/user';
import { Label } from '@/model/label';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumn({
  label
}: {
  label: Label;
}): JSX.Element {
  console.log(label);

  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>{label.title}</div>
      <div className={cx('kanban__column-content')}>
        <User />
      </div>
    </div>
  );
}
