import { useRef, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames/bind';
import { FormikProps, FormikValues } from 'formik';
import styles from './form.module.scss';
import FormError from './_error';
import SelectOption from '@/interface/select-option';

const cx = classNames.bind(styles);

type FormTextInputProps<T = FormikValues, R = string | number> = {
  // TODO: need a more universal solution (R = string | number)
  formik?: FormikProps<T>;
  error?: string;
  isMulti?: boolean;
  options: Array<SelectOption>;
  selectClassName?: string;
  handleChange?: (newValue: R | Array<R>) => void;
  placeholder?: string;
  className?: string;
  name?: string;
  value?: R | Array<R>;
};

export default function FormMultiSelect({
  isMulti,
  placeholder,
  className,
  selectClassName,
  options,
  handleChange,
  name,
  value,
  error
}: FormTextInputProps): JSX.Element {
  const selectRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const setActive = (): void => setIsActive(true);
  const cancelActive = (): void => setIsActive(false);

  const handleSelect = (data: SelectOption | Array<SelectOption>): void => {
    if (isMulti) {
      const values = (data as Array<SelectOption>).map((item) => item.value);

      handleChange(values);
    } else {
      const values = (data as SelectOption).value;

      handleChange(values);
    }
  };

  const focusToField = (): void => {
    selectRef.current.focus();
  };

  return (
    <div className={cx(['form__control', 'form__select-control', className])}>
      <Select
        ref={selectRef}
        isMulti={isMulti}
        onChange={handleSelect}
        name={name}
        options={options}
        onFocus={setActive}
        onMenuOpen={setActive}
        onMenuClose={cancelActive}
        onBlur={cancelActive}
        className={cx({
          form__select: true,
          form__field_active:
            isActive ||
            (isMulti
              ? (value as Array<string | number>).length > 0
              : Boolean(value)),
          [selectClassName]: !!selectClassName
        })}
        classNamePrefix='select'
        placeholder={''}
      />

      <span
        onClick={focusToField}
        className={cx('form__label')}>
        {placeholder}
      </span>

      <FormError errorText={error} />
    </div>
  );
}
