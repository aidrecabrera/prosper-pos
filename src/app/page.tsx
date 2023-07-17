import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row h-screen p-5 gap-5">
        <div className="w-4/5 bg-slate-900 rounded-xl"></div>
        <div className="flex flex-col grow gap-5">
          <div className="h-1/5 bg-slate-900 rounded-xl"></div>
          <div className="h-4/5 bg-slate-900 rounded-xl p-5">
            <div className="pt-3">
              <div className="flex flex-row grow w-full justify-between">
                <h1 className="font-medium tracking-wide">Units</h1>
                <h1 className="font-light">Php {"0.00"}</h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="flex flex-row grow w-full justify-between">
                <h1 className="font-medium tracking-wide">Sales</h1>
                <h1 className="font-light">Php {"0.00"}</h1>
              </div>
            </div>
            <div className="pt-3">
              <div className="flex flex-row grow w-full justify-between">
                <h1 className="font-medium tracking-wide">Tendered</h1>
                <h1 className="font-light">Php {"0.00"}</h1>
              </div>
            </div>
            <div className="pt-5">
              <hr />
            </div>
            <div className="pt-3">
              <div className="flex flex-row grow w-full justify-between">
                <h1 className="font-medium tracking-wide">Total</h1>
                <h1 className="font-light">Php {"0.00"}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
