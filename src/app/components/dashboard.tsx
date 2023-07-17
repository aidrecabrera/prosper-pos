import ItemListComponent from "./itemlist";
import ItemListHeaderComponent from "./itemlistheader";
export default function Dashboard() {
  return (
    <>
      <div className="h-[7%] flex flex-row gap-3">
        <form className="w-11/12 ">
          <input
            type="text"
            className="appearance-none outline-none rounded-xl w-full h-full text-gray tracking-wide text-sm p-5 bg-[#282C2C]"
            placeholder="Search SKU..."
          />
        </form>
        <button className="bg-white text-black w-1/12 rounded-xl items-center text-center flex justify-center">
          Scan
        </button>
      </div>
      {/* Dashboard Area */}
      <div className="h-[93%]">
        <ItemListHeaderComponent />
        <ItemListComponent
          product={"100124005"}
          description={"Quaker Oats"}
          quantity={2}
          price={250}
        />
      </div>
    </>
  );
}
