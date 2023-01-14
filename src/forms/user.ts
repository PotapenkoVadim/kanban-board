import * as Yup from 'yup';
import { UserModel } from '@/model/user';

export class UserSchema {
  public name: string;
  public email: string;
  public phone?: string;
  public website?: string;

  constructor(user?: UserModel | null) {
    this.name = user?.name ?? '';
    this.email = user?.email ?? '';
    this.phone = user?.phone ?? '';
    this.website = user?.website ?? '';
  }

  public static getValidationSchema(): Yup.SchemaOf<UserSchema> {
    return Yup.object()
      .shape({
        name: Yup.string()
          .required('Name is required'),
        email: Yup.string()
          .required('Email is required'),
        phone: Yup.string(),
        website: Yup.string()
      });
  }
}
