export class UserModel {
  public id: string;

  public name: string;

  public surname: string;

  public getFullName?(): string {
    return `${this.surname} ${this.name}`;
  }

  constructor(model: Partial<UserModel> = {}) {
    Object.assign(this, model);
  }
}
