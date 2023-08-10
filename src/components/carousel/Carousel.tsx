import { useEffect, useState } from 'react';
import PaginatorView from './Paginator';

export default function CarouselView() {
  const titles = [
    'Microscopios y estereoscopios de alta tecnología',
    'Equipo de laboratorio moderno y versátil',
    'Balanzas digitales para laboratorio, industria y educación',
    'Básculas para aplicaciones industriales',
  ];

  const [selectedItem, setSelectedItem] = useState(1);

  const updateSelectedItem = () => {
    const nextItem = selectedItem + 1;
    if (selectedItem === 4) setSelectedItem(1);
    else setSelectedItem(nextItem);
  };

  useEffect(() => {
    const setTimeOutCarousel = setTimeout(() => {
      updateSelectedItem();
    }, 4000);

    return () => {
      clearTimeout(setTimeOutCarousel);
    };
  });

  return (
    <section className="relative h-auto w-full">
      <div className="relative z-[3] mt-[53px] flex flex-col px-[35px]">
        <div className="flex flex-col">
          <span className="text-[30px] font-[300] leading-[normal]">
            {titles[selectedItem - 1]}
          </span>

          <button className="mt-10 w-fit min-w-[224px] cursor-pointer border border-[#1B75BB] bg-transparent py-3 text-center text-[#1B75BB] transition-all hover:bg-[#1B75BB] hover:text-white">
            Ver productos
          </button>
        </div>

        <div className="relative top-10 flex">
          <img
            src="/assets/microscopio-banner.png"
            alt="microscopio"
            className={selectedItem !== 1 ? 'hidden' : ''}
          />
          <img
            src="/assets/equipo-banner.png"
            alt="equipo"
            className={`scale-125 object-cover object-[30px_0px] ${
              selectedItem !== 2 ? 'hidden' : ''
            }`}
          />
          <img
            src="/assets/balanza-banner.png"
            alt="balanza"
            className={`scale-110 object-cover ${selectedItem !== 3 ? 'hidden' : ''}`}
          />
        </div>
        <div
          className={`relative top-10 flex
          ${selectedItem !== 4 ? 'hidden' : ''}`}
        >
          <img
            src="/assets/weight-machine.png"
            alt="weight-machine"
            className="h-[213px] w-[140px]"
          />
          <img
            src="/assets/ohaus.png"
            alt="ohaus"
            className="relative -left-[23px] top-[50px] h-[88.524px] w-[168.955px]"
          />
        </div>
      </div>
      <div className="absolute top-0 z-[1] h-[29.8125rem] w-full bg-[#F3F3F3]">
        <PaginatorView selected={selectedItem} />
      </div>
    </section>
  );
}
