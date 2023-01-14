export class CompanyModel {
  public name: string;

  public catchPhrase: string;

  public bs: string;

  constructor(model: Partial<CompanyModel> = {}) {
    Object.assign(this, model);
  }
}
