export class AddressModel {
  public street: string;

  public suite: string;

  public city: string;

  public zipcode: string;

  public geo: {
    lat: string;
    lng: string;
  };

  constructor(model: Partial<AddressModel> = {}) {
    Object.assign(this, model);
  }
}