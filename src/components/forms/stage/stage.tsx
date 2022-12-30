import Button from '@/components/ui-kit/button/button';
import FormTextField from '@/components/ui-kit/form/_text-field';
import classNames from 'classnames/bind';
import { ButtonVariant } from '@/enums';
import styles from './stage.module.scss';
import { StageModel } from '@/model/stage';
import { StageSchema } from '@/forms';
import { useFormik } from 'formik';
import { generateID } from '@/utils';
import FormMultiSelect from '@/components/ui-kit/form/_multi-select';
import { UserModel } from '@/model/user';
import { useEffect, useState } from 'react';
import SelectOption from '@/interface/select-option';

const cx = classNames.bind(styles);

export default function FormStage({
  stage,
  users,
  onSubmit
}: {
  stage?: StageModel | null;
  users: Array<UserModel>;
  onSubmit: (data: StageModel) => void;
}): JSX.Element {
  const [userOptions, setUserOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const options = users.map((item) => ({
      value: item.id,
      label: item.getFullName()
    }));

    setUserOptions(options);
  }, [users]);

  const initialValues = new StageSchema(stage);
  const validationSchema = StageSchema.getValidationSchema();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(
      stage
        ? { ...stage, ...values }
        : new StageModel({ ...values, id: generateID() })
    ),
    validationSchema
  });

  const changeSelect = (values: Array<string>): void => {
    formik.setFieldValue('userIDs', values);
  };

  return (
    <form
      className={cx('stage')}
      onSubmit={formik.handleSubmit}>
      <FormTextField
        name='title'
        error={formik.errors.title}
        value={formik.values.title}
        onChange={formik.handleChange}
        className={cx('stage__field')}
        placeholder='Stage title'
      />

      <FormMultiSelect
        isMulti={true}
        error={formik.errors.userIDs as string}
        value={formik.values.userIDs}
        options={userOptions}
        handleChange={changeSelect}
        name='userIDs'
        className={cx('stage__field')}
        placeholder='Select users'
      />

      <Button
        type='submit'
        className={cx('stage__button')}
        variant={ButtonVariant.PRIMARY}
      >
        {stage ? 'Update' : 'Add'}
      </Button>
    </form>
  );
}
