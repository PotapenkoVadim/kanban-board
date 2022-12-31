import classNames from 'classnames/bind';
import styles from './user.module.scss';
import Image from 'next/image';
import { UserModel } from '@/model/user';
import UserActions from './_actions';
import { useDrag } from 'react-dnd/dist/hooks';
import { DragSourceMonitor } from 'react-dnd';
import { StageModel } from '@/model/stage';
import { useDispatch } from 'react-redux';
import { bindUserToStage } from '@/store/stage';

import personImage from '@/public/person.jpg';

const cx = classNames.bind(styles);

export default function User({
  user,
  moveToStage,
  removeUser,
  updateUser
}: {
  user: UserModel;
  moveToStage: (user: UserModel) => void;
  removeUser: (user: UserModel) => void;
  updateUser: (user: UserModel) => void;
}): JSX.Element {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    type: 'userCard',
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (_, monitor: DragSourceMonitor): void => {
      const dropResult = monitor.getDropResult<{ stage: StageModel }>();
      dispatch(
        bindUserToStage({
          stageID: dropResult.stage.id,
          userID: user.id
        })
      );
    }
  });

  const handleMoveToStage = (): void => {
    moveToStage(user);
  };

  const handleRemoveUser = (): void => {
    removeUser(user);
  };

  const handleUpdateUser = (): void => {
    updateUser(user);
  };

  return (
    <div>
      <div
        ref={drag}
        className={cx({
          user: true,
          user_draging: isDragging
        })}
      >
        <Image
          className={cx('user__avatar')}
          src={personImage}
          alt='person' />

        <div className={cx('user__details')}>
          <div>{user.getFullName()}</div>
        </div>

        <UserActions
          onUpdateUser={handleUpdateUser}
          onRemoveUser={handleRemoveUser}
          onMoveToStage={handleMoveToStage}
        />
      </div>
    </div>
  );
}
