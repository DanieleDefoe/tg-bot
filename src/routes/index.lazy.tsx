import { createLazyFileRoute } from '@tanstack/react-router';
import ProductList from '../components/ProductList/ProductList';

export const Route = createLazyFileRoute('/')({
  component: ProductList,
  pendingComponent: () => <h2>Loading product list...</h2>,
});
