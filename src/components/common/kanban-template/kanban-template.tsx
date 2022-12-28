import { Label } from '@/model/label';
import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import KanbanTemplateColumn from './_column';
import KanbanTemplateHeader from './_header';

const cx = classNames.bind(styles);

export default function KanbanTemplate({
  labels
}: {
  labels: Array<Label>;
}): JSX.Element {
  return (
    <div className={cx('kanban')}>
      <KanbanTemplateHeader />

      <div className={cx('kanban__content')}>
        {labels?.length > 0 &&
          labels.map((item) => (
            <KanbanTemplateColumn
              key={item.id}
              label={item} />
          ))}

        <div className={cx('kanban__emptyslot')} />
      </div>
    </div>
  );
}
