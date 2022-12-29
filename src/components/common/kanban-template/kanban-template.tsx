import { StageModel } from '@/model/stage';
import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import KanbanTemplateColumn from './_column';
import KanbanTemplateHeader from './_header';

const cx = classNames.bind(styles);

export default function KanbanTemplate({
  stages,
  manageStage,
  removeStage
}: {
  stages: Array<StageModel>;
  manageStage: (stage?: StageModel) => void;
  removeStage: (stage: StageModel) => void;
}): JSX.Element {
  return (
    <div className={cx('kanban')}>
      <KanbanTemplateHeader handleAction={manageStage} />

      <div className={cx('kanban__content')}>
        {stages?.length > 0 &&
          stages.map((item) => (
            <KanbanTemplateColumn
              handleRemoveAction={removeStage}
              handleUpdateAction={manageStage}
              key={item.id}
              stage={item}
            />
          ))}

        <div className={cx('kanban__emptyslot')} />
      </div>
    </div>
  );
}
