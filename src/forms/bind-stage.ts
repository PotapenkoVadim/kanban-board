import * as Yup from 'yup';

export class BindStageSchema {
  public userID: string;

  constructor() {
    this.userID = '';
  }

  public static getValidationSchema(): Yup.SchemaOf<BindStageSchema> {
    return Yup.object()
      .shape({
        userID: Yup.string()
          .required('User ID is required')
      });
  }
}
