export default function Order() {
  return (
    <>
      <div className="flex justify-center pt-3 pb-3">
        <button
          className="bg-white text-slate-950 font-bold w-full h-12 rounded-xl"
          onClick={() => alert("Success!")}
        >
          ORDER
        </button>
      </div>
    </>
  );
}
