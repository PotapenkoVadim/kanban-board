import { Stage } from '@/model/stage';
import { configuration } from '@/configuration';

export class StageState {
  public items: Array<Stage>;

  constructor() {
    this.items = configuration.defaultStages;
  }
}
