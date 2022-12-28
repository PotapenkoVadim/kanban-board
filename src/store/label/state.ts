import { Label } from '@/model/label';
import { configuration } from '@/configuration';

export class LabelState {
  public items: Array<Label>;

  constructor() {
    this.items = configuration.defaultLabels;
  }
}
