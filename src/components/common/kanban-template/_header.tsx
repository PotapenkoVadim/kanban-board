import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';

const cx = classNames.bind(styles);

export default function KanbanTemplateHeader(): JSX.Element {
  return (
    <div className={cx('kanban__header')}>
      <h1 className={cx('kanban__title')}>Kanban Board</h1>
    </div>
  );
}
