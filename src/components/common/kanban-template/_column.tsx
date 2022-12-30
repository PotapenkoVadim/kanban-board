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
import { open as openBindUserModal } from '@/store/modals/bind-user';
import { open as openBindStageModal } from '@/store/modals/bind-stage';
import {
  open as openConfirmationModal,
  close as closeConfirmationModal
} from '@/store/modals/confirmation';
import { removeUser as removeUserFromStore } from '@/store/user';
import { unbindUser } from '@/store/stage';

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

  const openCreateUser = (): void => {
    dispatch(
      openUserModal({
        title: 'Create new user',
        stageID: stage.id
      })
    );
  };

  const moveToStage = (user: UserModel): void => {
    dispatch(
      openBindUserModal({
        title: 'Move user to stage',
        user
      })
    );
  };

  const openAddUserToStage = (): void => {
    dispatch(
      openBindStageModal({
        title: 'Add user to stage',
        stage
      })
    );
  };

  const openRemoveUser = (user: UserModel): void => {
    dispatch(
      openConfirmationModal({
        title: 'You want to delete the user?',
        acceptAction: () => removeUser(user)
      })
    );
  };

  const removeUser = (user: UserModel): void => {
    dispatch(removeUserFromStore({ userID: user.id }));
    dispatch(unbindUser({ userID: user.id }));
    dispatch(closeConfirmationModal());
  };

  const openUpdateUser = (user: UserModel): void => {
    dispatch(
      openUserModal({
        title: 'Update new user',
        user,
        stageID: stage.id
      })
    );
  };

  return (
    <div className={cx('kanban__column')}>
      <div className={cx('kanban__column-header')}>
        <span className={cx('kanban__column-title')}>{stage.title}</span>

        <KanbanTemplateColumnActions
          onAddUser={openAddUserToStage}
          onCreateUser={openCreateUser}
          onRemoveStage={removeAction}
          onUpdateStage={updateAction}
        />
      </div>
      <div className={cx('kanban__column-content')}>
        {users.length > 0 &&
          users.map((user) => (
            <User
              updateUser={openUpdateUser}
              removeUser={openRemoveUser}
              moveToStage={moveToStage}
              key={user.id}
              user={user}
            />
          ))}
      </div>
    </div>
  );
}
