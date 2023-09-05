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
    }, 5000);

    return () => {
      clearTimeout(setTimeOutCarousel);
    };
  });

  return (
    <section className="relative h-auto w-full">
      <div
        className="relative 
                      z-[3] 
                      mt-[53px] 
                      flex 
                      flex-col 
                      px-[35px] 
                      md:mt-[130px] 
                      md:px-[81px] 
                      xl:flex-row
                      xl:justify-center
                      "
      >
        <div className="z-[5] flex w-auto flex-col md:w-[560px]">
          <span
            className={`text-[30px] 
                            font-[300] 
                            leading-[normal] 
                            md:text-[48px]                            
                            ${selectedItem === 4 && 'md:mb-10 xl:mb-0'}
                            `}
          >
            {titles[selectedItem - 1]}
          </span>

          <a
            href="/productos"
            className="mt-10 w-fit min-w-[224px] 
                      cursor-pointer 
                      border 
                      border-[#1B75BB]
                      bg-transparent 
                      py-3 
                      text-center 
                      text-[#1B75BB] 
                      transition-all 
                      hover:bg-[#1B75BB] 
                      hover:text-white"
          >
            Ver productos
          </a>
        </div>

        <div
          className="pointer-events-none
                        relative
                        top-10 
                        float-right 
                        flex 
                        w-auto 
                        justify-end
                        md:-top-14
                        [&>img]:h-auto
                        [&>img]:2xl:h-[574px]
                        "
        >
          <img
            src="/assets/microscopio-banner.png"
            alt="microscopio"
            className={`
              ${
                selectedItem !== 1
                  ? 'hidden'
                  : 'animate-fade animate-normal animate-duration-1000 animate-once animate-ease-in'
              }
            `}
          />
          <img
            src="/assets/equipo-banner.png"
            alt="equipo"
            className={`scale-125 object-cover object-[30px_0px] ${
              selectedItem !== 2
                ? 'hidden'
                : 'animate-fade animate-normal animate-duration-1000 animate-once animate-ease-in'
            }`}
          />
          <img
            src="/assets/balanza-banner.png"
            alt="balanza"
            className={`scale-110 object-cover ${
              selectedItem !== 3
                ? 'hidden'
                : 'animate-fade animate-normal animate-duration-1000 animate-once animate-ease-in'
            }`}
          />
        </div>
        <div
          className={`relative top-10 flex
          justify-end
          md:-right-24
          md:-top-28
          2xl:top-0
          2xl:mb-32
          landscape:mb-10
          md:landscape:mb-32
          ${
            selectedItem !== 4
              ? 'hidden'
              : 'animate-fade animate-normal animate-duration-1000 animate-once animate-ease-in'
          }`}
        >
          <img
            src="/assets/weight-machine.png"
            alt="weight-machine"
            className="h-[213px] w-[140px] md:h-[262px] md:w-[194px] 2xl:h-[318px] 2xl:w-[235px]"
          />
          <img
            src="/assets/bascula.png"
            alt="ohaus"
            className="relative 
                      -left-[23px] 
                      top-[50px] 
                      h-[88.524px] 
                      w-[168.955px] 
                      md:top-[200px] 
                      md:h-[142px] 
                      md:w-[302px]
                      2xl:h-[171px]
                      2xl:w-[365px]
                      "
          />
        </div>
      </div>
      <div
        className="absolute 
                      top-0 
                      z-[1] 
                      h-[477px] 
                      w-full 
                      bg-[#F3F3F3] 
                      md:h-[578px] 
                      xl:h-full 
                      2xl:h-[578px]"
      >
        <PaginatorView selected={selectedItem} />
      </div>
    </section>
  );
}
