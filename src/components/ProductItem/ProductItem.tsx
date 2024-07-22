import { FC } from 'react';
import Button from '../Button/Button';
import './ProductItem.css';
import { ProductDto } from '../../dtos/product.dto';

interface ProductItemProps {
  className?: string;
  product: ProductDto;
  onAdd(product: ProductDto): void;
}

const ProductItem: FC<ProductItemProps> = ({ className, product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={`product ${className}`}>
      <div className="img" />
      <div className="title">{product.title}</div>
      <div className="description">{product.description}</div>
      <div className="price">
        Cost: <b>{product.price}</b>
      </div>
      <Button className="add-btn" onClick={onAddHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductItem;
