import './css/ProductsMenu.css';
import products from '../../../public/productos.json';
import { useState } from 'react';

export default function PaginatorView() {
  const [_, setValue] = useState(1);
  const selectCategory = (id) => {
    categories.forEach((element) => {
      element.active = false;
    });

    categories[id].active = true;
    setValue(categories[id].id);
  };

  const categories = products.categories;

  return (
    <section>
      <div>
        <div className="mr-[48.3696px] hidden md:block md:w-52">
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

      <div className="mb-4 flex appearance-none overflow-hidden border px-4 md:hidden">
        <select className="h-10 w-full appearance-none border-0 text-sm">
          {categories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
        <img className="w-4" src="/vector-10.svg" alt="arrow" />
      </div>
    </section>
  );
}
