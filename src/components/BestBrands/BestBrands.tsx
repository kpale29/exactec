import { useEffect, useState } from "react";
import ViewPaginator from "./Paginator";

export default function ViewBestBrands(){
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
        <section className="relative w-full h-[1137px] md:h-[556px] xl:h-[538px] flex items-center justify-center">
            <div className="relative z-[3] mt-[31px] flex flex-col px-[35px] text-center md:text-center xl:text-center items-center md:items-center xl:items-center">
                <div className="flex flex-col">
                    <span className="text-[40px] font-inter not-italic leading-[22.4px]">
                        <p>Las mejores marcas</p>
                    </span>
                    <span className="text-[16px] font-inter not-italic leading-[22.4px] w-full md:w-[672px] xl:w-[820px]">
                        <p className="mt-[39px] w-fit min-w-[224px]">
                        En Exactec trabajamos con las mejores marcas para asegurar el 
                        respaldo de los productos que adquiere con nosotros. <b>Trabajar con Exactec es 
                        trabajar tambien con las mejores marcas.</b>
                        </p>
                    </span>
                </div>
                <div className="mt-[28px] h-[171px] flex items-center justify-center w-full">
                    <div className="relative flex">
                        <img src="/assets/img-marcas-1.png" alt="" className={selectedItem !==1 ? 'hidden' : 'md:pr-[102px] xl:pr-[230px]'} />
                        <img src="/assets/img-marcas-2.png" alt="" className={selectedItem !==1 ? 'hidden' : 'md:pr-[102px] xl:pr-[230px]'} />
                        <img src="/assets/img-marcas-3.png" alt="" className={selectedItem !==1 ? 'hidden' : ''} />
                            
                        <img src="/assets/img-marcas-4.png" alt="" className={selectedItem !==2 ? 'hidden' : 'md:pr-[102px] pr-[230px]'} />
                        <img src="/assets/img-marcas-5.png" alt="" className={selectedItem !==2 ? 'hidden' : 'md:pr-[102px] pr-[230px]'} />
                        <img src="/assets/img-marcas-6.png" alt="" className={selectedItem !==2 ? 'hidden' : ''} />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 z-[1] mt-[475px] h-[13px] w-full">
                <ViewPaginator selected={selectedItem} />
            </div>
        </section>
    );
}