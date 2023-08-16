export default function PaginatorView({ selected }) {
  let items = ['one', 'two', 'three', 'four'];
  return (
    <div className="absolute right-[35px] top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 2xl:right-[100px]">
      {items.map((value, index) => {
        if (index === selected - 1) {
          return (
            <div
              key={index}
              className="h-[13px] w-[13px] animate-fade rounded-full bg-[#6A6A6A] animate-normal animate-duration-1000 animate-once animate-ease-in"
            />
          );
        }
        return (
          <div key={index} className="h-[13px] w-[13px] rounded-full bg-[#CCCCCC]" />
        );
      })}
    </div>
  );
}
