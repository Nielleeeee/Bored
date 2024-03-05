"use client";

import React, { FormEvent, useState } from "react";
import { getBored, getBoredSpecifc } from "@/app/actions/bored";
import Whitebored from "@/components/whitebored";
import FormModal from "../modal/formModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TransitionMoveUp } from "@/components/animation/transition";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Bored() {
  const [boredData, setBoredData] = useState<BoredTypes | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const getNewBored = async () => {
    setIsFetching(true);
    const response = await getBored();

    if (response.error) {
      setBoredData(null);
      setIsFetching(false);
    } else {
      setBoredData(response);
      setIsFetching(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      participants: "",
      price: "",
      accessibility: "",
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Activity type is required"),
      participants: Yup.string().required(),
      price: Yup.string().required(),
      accessibility: Yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const specificBored = await getBoredSpecifc(values);

        if (specificBored.error) {
          toast.error(`No activity found :(`);

          setBoredData(null);

          setIsOpenModal(false);

          resetForm();
        } else {
          setBoredData(specificBored);

          setIsOpenModal(false);

          resetForm();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  });

  return (
    <TransitionMoveUp>
      <ToastContainer />

      <section className="flex flex-col justify-center items-center w-full gap-10">
        <div className="flex gap-4">
          <button
            onClick={getNewBored}
            disabled={isFetching}
            className="w-max py-3 px-4 bg-blue-500 disabled:bg-blue-800 rounded-lg text-white"
          >
            Try this!
          </button>

          <FormModal
            modalTitle={"Customize ur query"}
            buttonTitle={"Or this!"}
            isOpen={isOpenModal}
            setIsOpen={setIsOpenModal}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="text-sm" htmlFor="type">
                  Activty Type
                </label>
                <select
                  name="type"
                  id="type"
                  onChange={formik.handleChange}
                  value={formik.values.type}
                  className={`w-full rounded-lg p-3 text-sm ${
                    formik.touched.type && formik.errors.type
                      ? "border-red-400 border-2"
                      : "border-gray-400 border"
                  }`}
                >
                  <option
                    value=""
                    defaultChecked
                    disabled
                    className="text-gray-400"
                  >
                    Choose Activity Type
                  </option>
                  <option value="education">Education</option>
                  <option value="recreational">Recreational</option>
                  <option value="social">Social</option>
                  <option value="diy">DIY</option>
                  <option value="charity">Charity</option>
                  <option value="cooking">Cooking</option>
                  <option value="relaxation">Relaxation</option>
                  <option value="music">Music</option>
                  <option value="busywork">Busywork</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Participants</label>

                <div className="flex flex-row gap-2 items-center">
                  <input
                    className={`w-full rounded-lg p-3 text-sm ${
                      formik.touched.participants && formik.errors.participants
                        ? "border-red-400 border-2"
                        : "border-gray-400 border"
                    }`}
                    placeholder="Participants"
                    type="number"
                    id="participants"
                    name="participants"
                    onChange={formik.handleChange}
                    value={formik.values.participants}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Price</label>

                <div className="flex flex-row gap-2 items-center">
                  <select
                    className={`w-full rounded-lg p-3 text-sm ${
                      formik.touched.price && formik.errors.price
                        ? "border-red-400 border-2"
                        : "border-gray-400 border"
                    }`}
                    id="accessibility"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                  >
                    <option value="" defaultChecked disabled>
                      Free or Not Free?
                    </option>
                    <option value="0">Free</option>
                    <option value="1">Not Free</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm">Accessibility</label>

                <div className="flex flex-row gap-2 items-center">
                  <select
                    className={`w-full rounded-lg p-3 text-sm ${
                      formik.touched.accessibility &&
                      formik.errors.accessibility
                        ? "border-red-400 border-2"
                        : "border-gray-400 border"
                    }`}
                    id="accessibility"
                    name="accessibility"
                    onChange={formik.handleChange}
                    value={formik.values.accessibility}
                  >
                    <option value="" defaultChecked disabled>
                      Choose Difficulty
                    </option>
                    <option value="1">Easy</option>
                    <option value="2">Moderate</option>
                    <option value="3">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full py-3 px-4 bg-blue-500 disabled:bg-blue-800 rounded-lg text-white"
                >
                  {formik.isSubmitting ? "Generating..." : "Generate"}
                </button>
              </div>
            </form>
          </FormModal>
        </div>

        {boredData ? (
          <Whitebored key={boredData.key} BoredData={boredData} />
        ) : null}
      </section>
    </TransitionMoveUp>
  );
}
