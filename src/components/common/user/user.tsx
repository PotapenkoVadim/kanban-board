import classNames from 'classnames/bind';
import styles from './user.module.scss';
import Image from 'next/image';

import personImage from '@/public/person.jpg';
import { UserModel } from '@/model/user';
import UserActions from './_actions';

const cx = classNames.bind(styles);

export default function User({
  user,
  moveToStage,
  removeUser
}: {
  user: UserModel;
  moveToStage: (user: UserModel) => void;
  removeUser: (user: UserModel) => void;
}): JSX.Element {
  const handleMoveToStage = (): void => {
    moveToStage(user);
  };

  const handleRemoveUser = (): void => {
    removeUser(user);
  };

  return (
    <div className={cx('user')}>
      <Image
        className={cx('user__avatar')}
        src={personImage}
        alt='person' />

      <div className={cx('user__details')}>
        <div>{user.getFullName()}</div>
      </div>

      <UserActions
        onRemoveUser={handleRemoveUser}
        onMoveToStage={handleMoveToStage}
      />
    </div>
  );
}
