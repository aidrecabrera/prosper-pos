import React, { useState } from "react";

export default function ComputationComponent() {
  return (
    <>
      <div className="pt-3">
        <div className="flex flex-row grow w-full justify-between">
          <h1 className="font-medium tracking-wide">Units</h1>
          <h1 className="font-light">{}</h1>
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
    </>
  );
}
