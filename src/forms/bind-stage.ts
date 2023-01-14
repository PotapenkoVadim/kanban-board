import * as Yup from 'yup';

export class BindStageSchema {
  public userID: number;

  constructor() {
    this.userID = null;
  }

  public static getValidationSchema(): Yup.SchemaOf<BindStageSchema> {
    return Yup.object()
      .shape({
        userID: Yup.number()
          .required('User ID is required')
      });
  }
}
