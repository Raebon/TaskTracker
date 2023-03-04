import React from "react";
import {
  PauseIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
} from "../../../components/icons";
import { IconButton } from "../../../components/elements/IconButton";

interface Props {
  title: string;
  active: boolean;
}

export const TrackingItem: React.FC<Props> = ({ title, active }) => {
  return (
    <section>
      {active ? (
        <span className="relative flex">
          <div className="absolute -top-1.5 right-0.5 h-4 w-4">
            <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          </div>
          <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
        </span>
      ) : null}
      <div className="mb-2 grid grid-cols-3 rounded-lg bg-gray-200/25 p-3 shadow">
        <div className="text-start">
          <span>{title}</span>
        </div>
        <div className="mx-2 flex justify-center gap-2 border-x border-gray-500">
          <input type="datetime-local" />
          -
          <input type="datetime-local" />
        </div>
        <div className="flex justify-end gap-2">
          <IconButton>{!active ? <PlayIcon /> : <PauseIcon />}</IconButton>
          <IconButton>
            <PencilIcon />
          </IconButton>
          <IconButton>
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </section>
  );
};
