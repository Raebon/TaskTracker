import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItem: React.FC<Props> = ({ value, onChange }) => {
  return (
    <form>
      <div className="relative pt-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-4  text-sm text-gray-900 focus:outline-2 focus:outline-amber-500 `}
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className={`absolute right-2.5 bottom-2.5 rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-500/75 focus:outline-none focus:ring-4 focus:ring-blue-300`}
        >
          Add Item
        </button>
      </div>
    </form>
  );
};
