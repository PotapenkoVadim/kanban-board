import Button from '@/components/ui-kit/button/button';
import FormMultiSelect from '@/components/ui-kit/form/_multi-select';
import { ButtonVariant } from '@/enums';
import { BindUserSchema } from '@/forms/bind-user';
import SelectOption from '@/interface/select-option';
import { StageModel } from '@/model/stage';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import styles from './bind-user.module.scss';

const cx = classNames.bind(styles);

export default function FormBindUser({
  stages,
  onSubmit
}: {
  stages: Array<StageModel>;
  onSubmit: (data: BindUserSchema) => void;
}): JSX.Element {
  const [stageOptions, setStageOptions] = useState<Array<SelectOption>>([]);

  useEffect(() => {
    const options = stages.map((item) => ({
      value: item.id,
      label: item.title
    }));

    setStageOptions(options);
  }, [stages]);

  const initialValues = new BindUserSchema();
  const validationSchema = BindUserSchema.getValidationSchema();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(values),
    validationSchema
  });

  const changeSelect = (value: string): void => {
    formik.setFieldValue('stageID', value);
  };

  return (
    <form
      className={cx('bind-user')}
      onSubmit={formik.handleSubmit}>
      <FormMultiSelect
        error={formik.errors.stageID}
        value={formik.values.stageID}
        options={stageOptions}
        handleChange={changeSelect}
        name='stageID'
        className={cx('bind-user__field')}
        placeholder='Select stage'
      />

      <Button
        type='submit'
        className={cx('bind-user__button')}
        variant={ButtonVariant.PRIMARY}
      >
        Move
      </Button>
    </form>
  );
}
