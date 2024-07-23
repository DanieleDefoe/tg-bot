import { useState } from 'react';
import { ProductDto } from '../../dtos/product.dto';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';
import './ProductList.css';

const products: ProductDto[] = [
  {
    id: '1',
    title: 'jeans denim',
    price: 5000,
    description: 'Color: blue, Material: boyfriend',
  },
  {
    id: '2',
    title: 'denim',
    price: 4000,
    description: 'Color: red, Material: wife',
  },
  {
    id: '3',
    title: 'jeans',
    price: 6000,
    description: 'Color: green, Material: husband',
  },
  {
    id: '4',
    title: 'beans',
    price: 7000,
    description: 'Color: gray, Material: mist',
  },
  {
    id: '5',
    title: 'kek',
    price: 2000,
    description: 'Color: blue, Material: ???',
  },
  {
    id: '6',
    title: 'lol',
    price: 10000,
    description: 'Color: blue, Material: who',
  },
];

const getTotalPrice = (items: ProductDto[]) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState<ProductDto[]>([]);
  const { tg } = useTelegram();

  const onAdd = (product: ProductDto) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems: ProductDto[] = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Purchase ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className="list">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} onAdd={onAdd} />
      ))}
    </div>
  );
};

export default ProductList;
