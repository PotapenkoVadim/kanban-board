import { useRef, useState, useEffect, Fragment } from 'react';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
import styles from './drop-down.module.scss';

const cx = classNames.bind(styles);

export default function DropDown({
  children,
  menu
}: {
  children: ReactNode;
  menu: Array<{ id: number; node: ReactNode }>;
}): JSX.Element {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeDropDown = (event: MouseEvent): void => {
      if (dropDownRef.current) {
        const isDropDownChildNode = dropDownRef.current.contains(
          event.target as HTMLElement
        );
        const isDropDownNode = dropDownRef.current === event.target;
        if (!isDropDownNode && !isDropDownChildNode) {
          setIsOpen(false);
        }
      }
    };

    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  return (
    <div
      ref={dropDownRef}
      className={cx('dropdown')}>
      <div
        onClick={toggleDropDown}
        className={cx('dropdown__target')}>
        {children}
      </div>

      <div
        className={cx({
          dropdown__content: true,
          dropdown__content_open: isOpen
        })}
      >
        {menu.map((item) => (
          <Fragment key={item.id}>{item.node}</Fragment>
        ))}
      </div>
    </div>
  );
}
