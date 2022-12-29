import * as Yup from 'yup';
import { Stage } from '@/model/stage';

export class StageSchema {
  public title: string;

  constructor(stage?: Stage) {
    this.title = stage?.title ?? '';
  }

  public static getValidationSchema(): Yup.SchemaOf<StageSchema> {
    return Yup.object()
      .shape({
        title: Yup.string()
          .required('Title field is required')
      });
  }
}
