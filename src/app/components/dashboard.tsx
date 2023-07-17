export default function Dashboard() {
  return (
    <>
      <div className="h-[7%] flex flex-row gap-3">
        <form className="w-11/12 ">
          <input
            type="text"
            className="rounded-xl w-full h-full text-gray tracking-wide text-sm p-5 bg-[#282C2C]"
            placeholder="Search SKU..."
          />
        </form>
        <div className="w-1/12 rounded-xl items-center text-center border flex justify-center">
          <h1>Scan</h1>
        </div>
      </div>
      <div className="h-[93%] border rounded-xl"></div>
    </>
  );
}
