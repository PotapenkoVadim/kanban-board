import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/layout/layout';
import Container from '@/components/ui-kit/container/container';
import KanbanTemplate from '@/components/common/kanban-template/kanban-template';
import { useAppSelector } from '@/hooks';
import { initSagaActions } from '@/store/init/saga-actions';
import StageModal from '@/components/modals/stage/stage';
import { open as openStageModal } from '@/store/modals/stage';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const { init: isInit, stage } = useAppSelector((state) => state);

  const openAddStage = (): void => {
    dispatch(
      openStageModal({
        title: 'Add new stage'
      })
    );
  };

  useEffect(() => {
    dispatch({ type: initSagaActions.INIT });
  }, []);

  return (
    <Layout>
      <Container>
        {isInit && <p>Store Works!</p>}

        <KanbanTemplate
          addStage={openAddStage}
          stages={stage.items} />
      </Container>

      <StageModal />
    </Layout>
  );
}
