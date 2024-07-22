import { createLazyFileRoute } from '@tanstack/react-router';
import Form from '../components/Form/Form';

export const Route = createLazyFileRoute('/form')({
  component: Form,
  pendingComponent: () => <h2>Loading form...</h2>,
});
