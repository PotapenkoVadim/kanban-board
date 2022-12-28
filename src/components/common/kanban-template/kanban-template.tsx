import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import KanbanTemplateColumn from './_column';

const cx = classNames.bind(styles);

export default function KanbanTemplate(): JSX.Element {
  return (
    <div className={cx('kanban')}>
      <div className={cx('kanban__header')}>
        <h1 className={cx('kanban__title')}>Kanban Board</h1>
      </div>

      <div className={cx('kanban__content')}>
        <KanbanTemplateColumn />

        <div className={cx('kanban__emptyslot')} />
      </div>
    </div>
  );
}
