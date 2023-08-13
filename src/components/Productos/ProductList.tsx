import CardProduct from './CardProduct';
import products from '../../../public/productos.json';

export default function ProductList() {
  return (
    <div>
      {products.products.map((product) => (
        <CardProduct
          img={product.img}
          name={product.name}
          description={product.description}
          items={product.items}
        />
      ))}
    </div>
  );
}
