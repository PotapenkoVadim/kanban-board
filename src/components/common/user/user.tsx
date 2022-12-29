import classNames from 'classnames/bind';
import styles from './user.module.scss';
import Image from 'next/image';

import personImage from '@/public/person.jpg';
import { User as UserModel } from '@/model/user';

const cx = classNames.bind(styles);

export default function User({ user }: { user: UserModel }): JSX.Element {
  return (
    <div className={cx('user')}>
      <Image
        className={cx('user__avatar')}
        src={personImage}
        alt='person' />

      <div className={cx('user__details')}>
        <div>{user.fullName}</div>
      </div>

      <div className={cx('user__actions')}>Actions</div>
    </div>
  );
}
