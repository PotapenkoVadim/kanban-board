import { Stage } from '@/model/stage';
import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import KanbanTemplateColumn from './_column';
import KanbanTemplateHeader from './_header';

const cx = classNames.bind(styles);

export default function KanbanTemplate({
  stages
}: {
  stages: Array<Stage>;
}): JSX.Element {
  return (
    <div className={cx('kanban')}>
      <KanbanTemplateHeader />

      <div className={cx('kanban__content')}>
        {stages?.length > 0 &&
          stages.map((item) => (
            <KanbanTemplateColumn
              key={item.id}
              stage={item} />
          ))}

        <div className={cx('kanban__emptyslot')} />
      </div>
    </div>
  );
}
