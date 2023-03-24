import React from "react";
import classnames from "classnames";

interface Props {
  showModal: boolean;
  closeModal: () => void;
  confirmButton: () => void;
}

export const ConfirmModal: React.FC<Props> = ({
  closeModal,
  confirmButton,
  showModal,
}) => {
  const modalClassName = classnames(
    "fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full",
    {
      hidden: !showModal,
    }
  );
  return (
    <div className={modalClassName}>
      <div className="relative mx-auto h-full w-full max-w-md md:mt-[10rem] md:h-auto">
        <div className="relative rounded-lg bg-white shadow">
          <button
            onClick={closeModal}
            type="button"
            className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 h-14 w-14 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to delete this item?
            </h3>
            <button
              onClick={confirmButton}
              type="button"
              className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
