export default function CardProduct({ img, name, description, items }) {
  return (
    <div className="pb-16 lg:flex lg:justify-center">
      <div className="flex w-full justify-center border border-black lg:w-auto lg:flex-none ">
        <figure>
          <img className="" src={img} alt="Tecnología de vanguardia" />
        </figure>
      </div>
      <div className="pt-5 lg:pl-5 lg:pt-0">
        <p className="bold text-xl">{name}</p>
        <p>{description}</p>
        {items.map((item) => (
          <div className="flex flex-row items-center gap-[14px] md:flex-row xl:flex-row">
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
