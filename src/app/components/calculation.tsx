"use client";

import PaymentComponent from "./payment";
import ComputationComponent from "./computation";
import OrderComponent from "./order";

export default function CalculationComponent() {
  return (
    <>
      <div className="flex flex-col grow gap-5">
        <div className="h-1/5 bg-[#282C2C] rounded-xl"></div>
        <div className="h-4/5 bg-[#282C2C] rounded-xl p-5">
          <div className="flex flex-col justify-between h-full">
            <div>
              <ComputationComponent />
            </div>
            <div>
              <PaymentComponent />
              <OrderComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
