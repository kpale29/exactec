import './css/ProductsMenu.css';
import products from '../../../public/productos.json';
import { useState } from 'react';

export default function ProductsMenu({ onDataChange }) {
  const [_, setValue] = useState(1);
  const selectCategory = (id) => {
    categories.forEach((element) => {
      element.active = false;
    });

    categories[id].active = true;
    setValue(categories[id].id);
    onDataChange(categories[id].id);
  };

  const categories = products.categories;

  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value);
    selectCategory(selectedId - 1);
  };

  return (
    <section>
      <div>
        <div className="mr-[3.0231rem] hidden md:block md:w-52">
          <ul className="list-none">
            {categories.map((category) => (
              <li key={category.id} className="mb-5 border-b border-black pb-2">
                <a
                  onClick={() => selectCategory(category.id - 1)}
                  className={`cursor-pointer ${category.active ? 'active-item' : ''}`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mb-4 flex h-auto w-auto  items-center md:hidden">
        <select
          title="Productos"
          className="relative flex h-10 w-full cursor-pointer appearance-none items-center overflow-hidden border bg-transparent px-4 text-sm "
          onChange={handleSelectChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <img
          className="pointer-events-none absolute right-3 w-4"
          src="/vector-10.svg"
          alt="arrow"
        />
      </div>
    </section>
  );
}
