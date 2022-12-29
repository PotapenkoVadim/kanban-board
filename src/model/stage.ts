export class StageModel {
  public id: string;

  public title: string;

  public userIDs: Array<string>;

  constructor(model: Partial<StageModel> = {}) {
    Object.assign(this, model);
  }
}
