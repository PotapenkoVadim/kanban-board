export class StageModel {
  public id: string;

  public title: string;

  public userIDs: Array<number>;

  constructor(model: Partial<StageModel> = {}) {
    Object.assign(this, model);
  }
}
