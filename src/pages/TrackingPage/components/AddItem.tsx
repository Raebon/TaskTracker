import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { AdjustmentsHorizontalIcon } from "../../../components/icons";
import { TrackItemType } from "../../../utils/types";
import classNames from "classnames";

interface Props {
  addProject: (e: TrackItemType) => void;
}

const currencyOptions = ["CZK", "USD"];

export const AddItem: React.FC<Props> = ({ addProject }) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      rate: 400,
      currency: "CZK",
    },
  });
  const toggleSettings = () => setShowSettings((prevState) => !prevState);
  const onSubmit = (e: FieldValues) => {
    const { name, rate, currency } = e;
    let payload: TrackItemType = {
      name,
      rate,
      currency,
      outputs: [],
    };
    addProject(payload);
    reset();
  };

  const AddItemInputClassName = classNames(
    "block w-full border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-2 focus:outline-amber-500",
    {
      "rounded-t-lg": showSettings,
      "rounded-lg": !showSettings,
    }
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative pt-2">
        <input
          type="text"
          {...register("name")}
          className={AddItemInputClassName}
          placeholder="Start typing..."
          required
        />
        <div className="absolute right-2.5 bottom-2.5">
          <div className="relative flex gap-2">
            <button
              type="button"
              title="Advance settings"
              onClick={toggleSettings}
              className={`rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500/75 focus:outline-none focus:ring-4 focus:ring-amber-300`}
            >
              <div className="w-5">
                <AdjustmentsHorizontalIcon />
              </div>
            </button>
            <button
              type="submit"
              className={`rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500/75 focus:outline-none focus:ring-4 focus:ring-amber-300`}
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
      {showSettings ? (
        <div className="grid grid-cols-2 rounded-b-lg bg-gray-200/25 p-2">
          <div className="flex gap-2">
            <label>Rate</label>
            <input
              type="text"
              className="px-2 text-sm text-gray-900"
              {...register("rate")}
            />
          </div>
          <div className="flex gap-2">
            <label>Currency</label>
            <select className="text-sm text-gray-900" {...register("currency")}>
              {currencyOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </form>
  );
};
