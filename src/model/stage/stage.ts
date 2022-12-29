export class Stage {
  public id: string;

  public title: string;

  public userIDs: Array<string>;

  constructor(model: Partial<Stage> = {}) {
    Object.assign(this, model);
  }
}
