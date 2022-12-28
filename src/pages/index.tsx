import Layout from '@/components/layout/layout';
import Container from '@/components/ui-kit/container/container';
import KanbanTemplate from '@/components/common/kanban-template/kanban-template';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <KanbanTemplate />
      </Container>
    </Layout>
  );
}
