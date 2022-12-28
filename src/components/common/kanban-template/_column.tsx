import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import User from '@/components/common/user/user';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumn(): JSX.Element {
  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>Header</div>
      <div className={cx('kanban__column-content')}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}
