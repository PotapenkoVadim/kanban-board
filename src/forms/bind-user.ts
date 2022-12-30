import * as Yup from 'yup';

export class BindUserSchema {
  public stageID: string;

  constructor() {
    this.stageID = '';
  }

  public static getValidationSchema(): Yup.SchemaOf<BindUserSchema> {
    return Yup.object()
      .shape({
        stageID: Yup.string()
          .required('Stage ID is required')
      });
  }
}
