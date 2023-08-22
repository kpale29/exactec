import CardProduct from './CardProduct';
import products from '../../../public/productos.json';
import Fuse from 'fuse.js';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

export default function ProductList() {
  const [productsList, setProductsList] = useState([]);
  const [searchReadout, setSearchReadout] = useState('');

  function updateDocumentTitle(search) {
    document.title = search ? `buscar: ${search}` : 'Buscar producto';
  }

  function updateSearchReadout(search) {
    setSearchReadout(search ? `${search}` : '');
  }

  useEffect(() => {
    const urlParams = DOMPurify.sanitize(
      new URLSearchParams(window.location.search).get('q')
    );

    updateDocumentTitle(urlParams);
    updateSearchReadout(urlParams);
    searchData(urlParams);

    const search = document.querySelector('#search');
    search.addEventListener('keypress', (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = DOMPurify.sanitize((search as HTMLInputElement).value);
        updateDocumentTitle(searchTerm);
        updateSearchReadout(searchTerm);
        window.history.pushState(null, '', `buscarProductos?q=${searchTerm}`);
        searchData(searchTerm);
      }
    });

    function searchData(query) {
      const fuseOptions = {
        // isCaseSensitive: false,
        includeScore: true,
        // shouldSort: true,
        // includeMatches: false,
        // findAllMatches: false,
        minMatchCharLength: 3,
        // location: 0,
        threshold: 0.3,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ['name', 'items'],
      };

      const fuse = new Fuse(products.products, fuseOptions);
      const searchPattern = query;
      setProductsList(fuse.search(searchPattern));
    }
  }, []);

  return (
    <div>
      <main className="bg-secondary-bg px-[35px] md:px-[81px]">
        <header className="pt-10 md:text-center">
          <h1 className="text-2xl md:text-5xl lg:text-5xl mb-10 bg-[#1B75BB] p-5 text-white">
          Búsqueda Relacionada a: <span>{searchReadout}</span>
          </h1>
        </header>
        <div className=" grid grid-cols-1 gap-3 lg:gap-1 lg:grid-cols-2 2xl:m-auto  2xl:my-0">
          {
            productsList.length > 0 ?
          productsList.map((product) => (
            <CardProduct
              key={product.item.id}
              img={product.item.img}
              name={product.item.name}
              description={product.item.description}
              items={product.item.items}
            />
          )): <div className='mb-10 font-bold'>
            <p className='mb-10'>No existe ningún producto con esta descripción: "{searchReadout}"</p>
            <a href="/productos/" className='underline text-[#1B75BB] mt-10'>Buscar por categoria</a>
            </div>
          
          }
        </div>
      </main>
    </div>
  );
}
