import * as Yup from 'yup';
import { StageModel } from '@/model/stage';

export class StageSchema {
  public title: string;
  public userIDs: Array<number>;

  constructor(stage?: StageModel | null) {
    this.title = stage?.title ?? '';
    this.userIDs = stage?.userIDs ?? [];
  }

  public static getValidationSchema(): Yup.SchemaOf<StageSchema> {
    return Yup.object()
      .shape({
        title: Yup.string()
          .required('Title field is required'),
        userIDs: Yup.array()
      });
  }
}
