import classNames from 'classnames/bind';
import styles from './user.module.scss';
import Image from 'next/image';

import personImage from '@/public/person.jpg';

const cx = classNames.bind(styles);

export default function User(): JSX.Element {
  return (
    <div className={cx('user')}>
      <Image
        className={cx('user__avatar')}
        src={personImage}
        alt='person' />

      <div className={cx('user__details')}>
        <div>Лев Давидович Ландау</div>
      </div>

      <div className={cx('user__actions')}>Actions</div>
    </div>
  );
}
