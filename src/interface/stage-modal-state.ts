import { Stage } from '@/model/stage';

export default interface StageModalState {
  isOpen: boolean;
  title: string;
  stage?: Stage | null;
}
