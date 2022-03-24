import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const Balance = () => {
  const [meter, setMeter] = useState({
    meterNumber: "",
  });

  const [errors, setErrors] = useState({
    meterNumber: "",
  });

  function handleChange(e) {
    setMeter((prev) => ({
      ...prev,
      [e.name]: e.value,
    }));
  }

  useEffect(() => {

    if (meter.meterNumber.split("").length < 6) {
      setErrors((prev) => ({
        ...prev,
        meterNumber: "Your meter is invalid",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        meterNumber: "",
      }));
    }
  }, [meter.amount, meter.meterNumber]);

  return (
    <React.Fragment>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md pt-7">
              <form className="bg-white border-2 border-zinc-700 rounded px-12 pt-6 pb-8 mb-4">
                <div className="text-xl mt-1 mb-5 font-bold text-center text-[#6e0958]">
                  Online Electric Power Seller 
                </div>
                <div className="mb-4">
                  <label
                    className="text-gray-600 block"
                    htmlFor="username"
                  >
                    Enter ur meter number
                  </label>
                  <input
                    value={meter.meterNumber}
                    onChange={(e) => handleChange(e.target)}
                    className="ppearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="meterNumber"
                    type="number"
                    pattern="[0-8]*"
                    required
                    autoFocus
                    placeholder="Meter number"
                  />

                  {errors.meterNumber && (
                    <p className="text-red-500">{errors.meterNumber}</p>
                  )}
                </div>
        

                <button
                  className="bg-main focus:outline-none w-10/12 text-white p-3 px-10 rounded-3xl mt-4"
                  type="submit"
                >
                  Client Can you please check ur balance???
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Balance;
