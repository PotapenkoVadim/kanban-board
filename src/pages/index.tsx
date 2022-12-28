import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@/components/layout/layout';
import Container from '@/components/ui-kit/container/container';
import KanbanTemplate from '@/components/common/kanban-template/kanban-template';
import { useAppSelector } from '@/hooks';
import { initSagaActions } from '@/store/init/saga-actions';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();
  const isInit = useAppSelector((state) => state.init);

  useEffect(() => {
    dispatch({ type: initSagaActions.INIT });
  }, []);

  return (
    <Layout>
      <Container>
        {isInit && <p>Store Works!</p>}

        <KanbanTemplate />
      </Container>
    </Layout>
  );
}
