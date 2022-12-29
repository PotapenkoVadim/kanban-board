import classNames from 'classnames/bind';
import styles from './kanban-template.module.scss';
import User from '@/components/common/user/user';
import { StageModel } from '@/model/stage';
import { useAppSelector } from '@/hooks';
import { useEffect, useState } from 'react';
import { UserModel } from '@/model/user';
import KanbanTemplateColumnActions from './_column-actions';
import { open as openUserModal } from '@/store/modals/user';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

export default function KanbanTemplateColumn({
  stage,
  handleUpdateAction,
  handleRemoveAction
}: {
  stage: StageModel;
  handleUpdateAction: (stage: StageModel) => void;
  handleRemoveAction: (stage: StageModel) => void;
}): JSX.Element {
  const dispatch = useDispatch();
  const { items: initialUsers } = useAppSelector((state) => state.user);

  const [users, setUsers] = useState<Array<UserModel>>([]);

  useEffect(() => {
    const stageUsers = initialUsers.filter(
      (item) => stage.userIDs && stage.userIDs.includes(item.id)
    );

    setUsers(stageUsers);
  }, [stage, initialUsers]);

  const updateAction = (): void => handleUpdateAction(stage);
  const removeAction = (): void => handleRemoveAction(stage);

  const openAddUser = (): void => {
    dispatch(
      openUserModal({
        title: 'Add new user',
        stageID: stage.id
      })
    );
  };

  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>
        <span className={cx('kanban__column-title')}>{stage.title}</span>

        <KanbanTemplateColumnActions
          onAddUser={openAddUser}
          onRemoveStage={removeAction}
          onUpdateStage={updateAction}
        />
      </div>
      <div className={cx('kanban__column-content')}>
        {users.length > 0 &&
          users.map((user) => <User
            key={user.id}
            user={user} />)}
      </div>
    </div>
  );
}
