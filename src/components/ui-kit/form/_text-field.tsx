import { useRef } from 'react';
import classNames from 'classnames/bind';
import { FormikValues, FormikProps } from 'formik';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './form.module.scss';
import FormError from './_error';

const cx = classNames.bind(styles);

type FormTextInputProps<T = FormikValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  formik?: FormikProps<T>;
  error?: string;
  isFilled?: boolean;
};

export default function FormTextField({
  formik,
  placeholder,
  className,
  value,
  error,
  ...props
}: FormTextInputProps): JSX.Element {
  const fieldRef = useRef<HTMLInputElement>(null);

  const focusToField = (): void => {
    if (fieldRef.current) {
      fieldRef.current.focus();
    }
  };

  return (
    <div className={cx(['form__control', className])}>
      <input
        ref={fieldRef}
        value={value}
        className={cx({
          form__field: true,
          form__field_active: !!value
        })}
        {...props}
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
