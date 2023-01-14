import { AddressModel } from './address';
import { CompanyModel } from './company';

export class UserModel {
  public id: number;

  public name: string;

  public email?: string;

  public address?: AddressModel;

  public phone?: string;

  public website?: string;

  public company?: CompanyModel;

  constructor(model: Partial<UserModel> = {}) {
    Object.assign(this, model);
  }
}
