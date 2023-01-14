import FormTextField from '@/components/ui-kit/form/_text-field';
import classNames from 'classnames/bind';
import { UserModel } from '@/model/user';
import styles from './user.module.scss';
import { useFormik } from 'formik';
import { UserSchema } from '@/forms/user';
import Button from '@/components/ui-kit/button/button';
import { ButtonVariant } from '@/enums';

const cx = classNames.bind(styles);

export default function FormUser({
  user,
  onSubmit
}: {
  user?: UserModel | null;
  onSubmit: (data: UserModel) => void;
}): JSX.Element {
  const initialValues = new UserSchema(user);
  const validationSchema = UserSchema.getValidationSchema();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(
      user
        ? { ...user, ...values }
        : new UserModel({ ...values, id: Date.now() })
    ),
    validationSchema
  });

  return (
    <form
      className={cx('user')}
      onSubmit={formik.handleSubmit}>
      <FormTextField
        name='name'
        error={formik.errors.name}
        value={formik.values.name}
        onChange={formik.handleChange}
        className={cx('user__field')}
        placeholder='Name'
      />

      <FormTextField
        name='email'
        type='email'
        error={formik.errors.email}
        value={formik.values.email}
        onChange={formik.handleChange}
        className={cx('user__field')}
        placeholder='Email'
      />

      <FormTextField
        name='phone'
        type='tel'
        error={formik.errors.phone}
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={cx('user__field')}
        placeholder='Phone'
      />

      <FormTextField
        name='website'
        error={formik.errors.website}
        value={formik.values.website}
        onChange={formik.handleChange}
        className={cx('user__field')}
        placeholder='Website'
      />

      <Button
        type='submit'
        className={cx('user__button')}
        variant={ButtonVariant.PRIMARY}
      >
        {user ? 'Update' : 'Add'}
      </Button>
    </form>
  );
}
