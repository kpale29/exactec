import Menu from '../../components/Productos/ProductsMenu';
import ProductList from '../../components/Productos/ProductList';
import { useState } from 'react';

export default function Products() {
  const [filter, setData] = useState(1);

  const handleDataChange = (newData) => {
    setData(newData);
  };

  return (
    <div className=" w-auto md:flex md:justify-evenly  2xl:m-auto 2xl:my-0 ">
      <Menu onDataChange={handleDataChange} />
      <ProductList filterId={filter} />
    </div>
  );
}
