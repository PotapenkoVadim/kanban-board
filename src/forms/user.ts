import * as Yup from 'yup';
import { UserModel } from '@/model/user';

export class UserSchema {
  public name: string;
  public surname: string;

  constructor(stage?: UserModel | null) {
    this.name = stage?.name ?? '';
    this.surname = stage?.surname ?? '';
  }

  public static getValidationSchema(): Yup.SchemaOf<UserSchema> {
    return Yup.object()
      .shape({
        name: Yup.string()
          .required('Name is required'),
        surname: Yup.string()
          .required('Surname is required')
      });
  }
}
