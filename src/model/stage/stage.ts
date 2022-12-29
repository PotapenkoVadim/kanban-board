export class Stage {
  public id: string;

  public title: string;

  public userIDs: Array<number>;

  constructor(model: Partial<Stage> = {}) {
    Object.assign(this, model);
  }
}
