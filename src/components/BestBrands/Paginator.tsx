export default function ViewPaginator({ selected }) {
  let items = ['one', 'two'];
  return (
    <div className="absolute inset-x-0 bottom-4 flex justify-center">
      {items.map((value, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full ${
            index === selected - 1 ? 'bg-[#6A6A6A]' : 'bg-[#CCCCCC]'
          } mx-2`}
        />
      ))}
    </div>
  );
}
  