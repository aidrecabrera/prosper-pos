import React from "react";
import ItemListComponent from "./itemlist";
import ItemListHeaderComponent from "./itemlistheader";
import GetItems from "../api/getitems";

export default function Dashboard() {
  const displayScannedItems = GetItems();
  return (
    <>
      <div className="h-[7%] flex flex-row gap-3">
        <form className="w-11/12">
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
        <div className="h-[88%]">
          <div className="overflow-y-auto h-full" style={{ maxHeight: "100%" }}>
            {displayScannedItems.map((item, index) => {
              return (
                <ItemListComponent
                  key={index}
                  product={item.Product + "" + index}
                  description={item.Description}
                  quantity={item.Quantity}
                  price={item.Price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
