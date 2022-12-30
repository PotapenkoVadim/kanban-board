import { DetailedHTMLProps, SelectHTMLAttributes, useState } from 'react';
import Select from 'react-select';
import classNames from 'classnames/bind';
import { FormikProps, FormikValues } from 'formik';
import styles from './form.module.scss';
import FormError from './_error';
import SelectOption from '@/interface/select-option';

const cx = classNames.bind(styles);

type FormTextInputProps<T = FormikValues> = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  formik?: FormikProps<T>;
  error?: string;
  isMulti?: boolean;
  options: Array<SelectOption>;
  selectClassName?: string;
  handleChange?: (newValue: Array<string>) => void;
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
  const [isActive, setIsActive] = useState(false);

  const setActive = (): void => setIsActive(true);
  const cancelActive = (): void => setIsActive(false);

  const handleSelect = (data: Array<SelectOption>): void => {
    const values = data.map((item) => item.value);

    handleChange(values);
  };

  return (
    <div className={cx(['form__control', 'form__select-control', className])}>
      <Select
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
          form__field_active: isActive || (value as Array<string>).length > 0,
          [selectClassName]: !!selectClassName
        })}
        classNamePrefix='select'
        placeholder={''}
      />

      <span className={cx('form__label')}>{placeholder}</span>

      <FormError errorText={error} />
    </div>
  );
}
