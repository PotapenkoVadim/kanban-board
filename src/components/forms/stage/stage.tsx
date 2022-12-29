import Button from '@/components/ui-kit/button/button';
import FormTextField from '@/components/ui-kit/form/_text-field';
import classNames from 'classnames/bind';
import { ButtonVariant } from '@/enums';
import styles from './stage.module.scss';
import { Stage } from '@/model/stage';
import { StageSchema } from '@/forms';
import { useFormik } from 'formik';
import { generateID } from '@/utils';

const cx = classNames.bind(styles);

export default function FormStage({
  stage,
  onSubmit
}: {
  stage?: Stage;
  onSubmit: (data: Stage) => void;
}): JSX.Element {
  const initialValues = new StageSchema(stage);
  const validationSchema = StageSchema.getValidationSchema();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => onSubmit(
      new Stage({
        ...values,
        id: generateID(),
        title: values.title
      })
    ),
    validationSchema
  });

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

      <Button
        type='submit'
        className={cx('stage__button')}
        variant={ButtonVariant.PRIMARY}
      >
        Add
      </Button>
    </form>
  );
}
