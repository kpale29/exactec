export default function CardProduct({ img, name, description, items }) {
  return (
    <div className="pb-16 lg:flex lg:justify-between">
      <div className="flex w-full items-center justify-center border border-black lg:w-auto lg:flex-none">
        <figure>
          <img
            className="w-[305px] max-w-[305px] md:w-[413px] md:max-w-[413px] lg:w-[314px] lg:max-w-[314px] "
            src={img}
            alt="Tecnología de vanguardia"
          />
        </figure>
      </div>
      <div className="pt-5 lg:pl-5 lg:pt-0">
        <p className="bold text-xl">{name}</p>
        <p>{description}</p>
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-row items-center gap-[14px] md:flex-row xl:flex-row"
          >
            <img
              src="/assets/Ellipse.svg"
              alt=""
              className="inline-block rounded object-cover"
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
