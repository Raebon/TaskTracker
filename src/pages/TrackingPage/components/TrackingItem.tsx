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
}

export const TrackingItem: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-2 grid grid-cols-3 rounded-lg bg-gray-200/25 p-3 shadow-lg">
      <div className="text-start">
        <span>{title}</span>
      </div>
      <div className="mx-2 flex justify-center gap-2 border-x border-gray-500">
        <input type="datetime-local" />
        -
        <input type="datetime-local" />
      </div>
      <div className="flex justify-end gap-2">
        <IconButton>
          <PlayIcon />
        </IconButton>
        <IconButton>
          <PencilIcon />
        </IconButton>
        <IconButton>
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};
