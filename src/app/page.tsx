import styles from "./page.module.css";
import CalculationComponent from "./components/calculation";
import PaymentComponent from "./components/payment";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row h-screen p-5 gap-5">
        <div className="w-4/5 bg-slate-900 rounded-xl"></div>
        <CalculationComponent />
      </div>
    </main>
  );
}
