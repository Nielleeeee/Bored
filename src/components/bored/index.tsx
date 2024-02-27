"use client";

import React, { useState } from "react";
import { getBored } from "@/app/actions/bored";

interface BoredTypes {
  activity?: string;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
  accessibility?: number;
}

export default function Bored() {
  const [boredData, setBoredData] = useState<BoredTypes | null>(null);
  const [accessibilityPercentage, setAccessibilityPercentage] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const getNewBored = async () => {
    setIsFetching(true);
    const response = await getBored();

    if (response.error) {
      setBoredData(null);
      setIsFetching(false);
    }

    setBoredData(response);
    setAccessibilityPercentage(response.accessibility !== undefined ? response.accessibility * 100 : null);
    setIsFetching(false);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <button
        onClick={getNewBored}
        disabled={isFetching}
        className="w-max py-3 px-4 bg-blue-500 disabled:bg-blue-800 rounded-lg text-white"
      >
        Try this!
      </button>
      {boredData ? (
        <div className="p-10 ">
          <div className="flex flex-col gap-2 text-white">
            <p className="font-medium">
              Do this: <span className="font-normal">{boredData.activity}</span>
            </p>

            <p className="font-medium">
              What kind: <span className="font-normal">{boredData.type}</span>
            </p>

            <p className="font-medium">
              Participants:{" "}
              <span className="font-normal">{boredData.participants}</span>
            </p>

            <p className="font-medium">
              How much will it cost:{" "}
              <span className="font-normal">${boredData.price}</span>
            </p>

            <p className="font-medium">
              How hard will it be:{" "}
              <span className="font-normal">{accessibilityPercentage}%</span>
            </p>

            <p className="font-medium">
              Reference: <span className="font-normal">{boredData.link}</span>
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
