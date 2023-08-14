import Menu from '../../components/Productos/ProductsMenu';
import ProductList from '../../components/Productos/ProductList';
import { useState } from 'react';

export default function Products() {
  const [filter, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className="md:flex md:justify-between lg:mx-52">
      <Menu onDataChange={handleDataChange} />
      <ProductList filterId={filter} />
    </div>
  );
}
