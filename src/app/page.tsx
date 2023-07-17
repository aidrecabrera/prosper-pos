import styles from "./page.module.css";
import CalculationComponent from "./components/calculation";
import PaymentComponent from "./components/payment";
import DashboardComponent from "./components/dashboard";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-row h-screen p-5 gap-5">
        <div className="flex flex-col w-4/5 gap-5">
          <DashboardComponent />
        </div>
        <CalculationComponent />
      </div>
    </main>
  );
}
