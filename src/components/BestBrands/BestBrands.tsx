import { useEffect, useState } from 'react';
import ViewPaginator from './Paginator';

export default function ViewBestBrands() {
  const [selectedItem, setSelectedItem] = useState(1);

  const updateSelectedItem = () => {
    const nextItem = selectedItem + 1;
    if (selectedItem === 2) setSelectedItem(1);
    else setSelectedItem(nextItem);
  };

  useEffect(() => {
    const setTimeOutCarousel = setTimeout(() => {
      updateSelectedItem();
    }, 3000);

    return () => {
      clearTimeout(setTimeOutCarousel);
    };
  });

  return (
    <section className="relative flex h-[1137px] w-full items-center justify-center md:h-[556px] xl:h-[538px]">
      <div className="relative z-[3] mt-[31px] flex flex-col items-center px-[35px] text-center md:items-center md:text-center xl:items-center xl:text-center">
        <div className="flex flex-col">
          <span className="font-inter text-[40px] not-italic leading-[22.4px]">
            <p>Las mejores marcas</p>
          </span>
          <span className="font-inter w-full text-[16px] not-italic leading-[22.4px] md:w-[672px] xl:w-[820px]">
            <p className="mt-[39px] w-fit min-w-[224px]">
              En Exactec trabajamos con las mejores marcas para asegurar el respaldo de
              los productos que adquiere con nosotros.{' '}
              <b>Trabajar con Exactec es trabajar tambien con las mejores marcas.</b>
            </p>
          </span>
        </div>
        <div className="mt-[28px] flex h-[171px] w-full items-center justify-center">
          <div className="relative flex w-full justify-evenly [&>img]:md:w-[156px] ">
            <img
              src="/assets/img-marcas-1.png"
              alt=""
              className={selectedItem !== 1 ? 'hidden' : ''}
            />
            <img
              src="/assets/img-marcas-2.png"
              alt=""
              className={selectedItem !== 1 ? 'hidden' : ''}
            />
            <img
              src="/assets/img-marcas-3.png"
              alt=""
              className={selectedItem !== 1 ? 'hidden' : ''}
            />

            <img
              src="/assets/img-marcas-4.png"
              alt=""
              className={selectedItem !== 2 ? 'hidden' : ''}
            />
            <img
              src="/assets/img-marcas-5.png"
              alt=""
              className={selectedItem !== 2 ? 'hidden' : ''}
            />
            <img
              src="/assets/img-marcas-6.png"
              alt=""
              className={selectedItem !== 2 ? 'hidden' : ''}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-[1] mt-[475px] h-[13px] w-full">
        <ViewPaginator selected={selectedItem} />
      </div>
    </section>
  );
}
