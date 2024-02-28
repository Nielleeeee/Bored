"use client";

import React, { useState, Fragment } from "react";
import { getBored } from "@/app/actions/bored";
import Whitebored from "@/components/whitebored";
import { Dialog, Transition } from "@headlessui/react";

export default function Bored() {
  const [boredData, setBoredData] = useState<BoredTypes | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const getNewBored = async () => {
    setIsFetching(true);
    const response = await getBored();

    if (response.error) {
      setBoredData(null);
      setIsFetching(false);
    }

    setBoredData(response);
    setIsFetching(false);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full gap-10">
      <div className="flex gap-4">
        <button
          onClick={getNewBored}
          disabled={isFetching}
          className="w-max py-3 px-4 bg-blue-500 disabled:bg-blue-800 rounded-lg text-white"
        >
          Try this!
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="w-max py-3 px-4 bg-orange-400 disabled:bg-blue-800 rounded-lg text-white"
        >
          Or this
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-10">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                as={Fragment}
              >
                <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center mt-4 mb-6 font-semibold leading-6 text-gray-900"
                  >
                    Customize ur input
                  </Dialog.Title>

                  {/* Close Button */}
                  <div className="absolute top-3 right-3">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent p-2 text-sm font-medium text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* <form action=</form> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {boredData ? <Whitebored {...boredData} /> : null}
    </section>
  );
}
