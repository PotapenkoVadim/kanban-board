import Button from '@/components/ui-kit/button/button';
import FormMultiSelect from '@/components/ui-kit/form/_multi-select';
import { ButtonVariant } from '@/enums';
import { BindStageSchema } from '@/forms';
import SelectOption from '@/interface/select-option';
import { UserModel } from '@/model/user';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import styles from './bind-stage.module.scss';

const cx = classNames.bind(styles);

export default function FormBindStage({
  users,
  onSubmit
}: {
  users: Array<UserModel>;
  onSubmit: (data: BindStageSchema) => void;
}): JSX.Element {
  const [userOptions, setUserOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const options = users.map((item) => ({
      value: item.id,
      label: item.getFullName()
    }));

    setUserOptions(options);
  }, [users]);

  const initialValues = new BindStageSchema();
  const validationSchema = BindStageSchema.getValidationSchema();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values),
    validationSchema
  });

  const changeSelect = (value: string): void => {
    formik.setFieldValue('userID', value);
  };

  return (
    <form
      className={cx('bind-stage')}
      onSubmit={formik.handleSubmit}>
      <FormMultiSelect
        error={formik.errors.userID}
        value={formik.values.userID}
        options={userOptions}
        handleChange={changeSelect}
        name='stageID'
        className={cx('bind-stage__field')}
        placeholder='Select stage'
      />

      <Button
        type='submit'
        className={cx('bind-stage__button')}
        variant={ButtonVariant.PRIMARY}
      >
        Add
      </Button>
    </form>
  );
}
