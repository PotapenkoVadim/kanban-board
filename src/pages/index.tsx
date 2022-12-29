import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/layout/layout';
import Container from '@/components/ui-kit/container/container';
import KanbanTemplate from '@/components/common/kanban-template/kanban-template';
import { useAppSelector } from '@/hooks';
import { initSagaActions } from '@/store/init/saga-actions';
import StageModal from '@/components/modals/stage/stage';
import { open as openStageModal } from '@/store/modals/stage';
import {
  open as openConfirmationModal,
  close as closeConfirmationModal
} from '@/store/modals/confirmation';
import { StageModel } from '@/model/stage';
import ConfirmationModal from '@/components/modals/confirmation/confirmation';
import { removeStage as removeStageFromStore } from '@/store/stage';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const { init: isInit, stage } = useAppSelector((state) => state);

  const openManageStage = (stage?: StageModel): void => {
    dispatch(
      openStageModal({
        title: stage ? 'Update stage' : 'Add new stage',
        stage: stage
      })
    );
  };

  const openRemoveStage = (stage: StageModel): void => {
    dispatch(
      openConfirmationModal({
        title: 'You want to delete the stage?',
        acceptAction: () => removeStage(stage)
      })
    );
  };

  const removeStage = (stage: StageModel): void => {
    dispatch(removeStageFromStore(stage));
    dispatch(closeConfirmationModal());
  };

  useEffect(() => {
    dispatch({ type: initSagaActions.INIT });
  }, []);

  return (
    <Layout>
      <Container>
        {isInit && <p>Store Works!</p>}

        <KanbanTemplate
          removeStage={openRemoveStage}
          manageStage={openManageStage}
          stages={stage.items}
        />
      </Container>

      <StageModal />
      <ConfirmationModal />
    </Layout>
  );
}
