import React, { useState, useRef } from "react";
import {
  PauseIcon,
  PencilIcon,
  TrashIcon,
  PlayIcon,
} from "../../../components/icons";
import { IconButton } from "../../../components/elements/IconButton";
import { TrackItemType } from "../../../utils/types";

interface Props {
  item: TrackItemType; //todo type
  toggleTimer: () => void;
  setTimer: (e: { id: number; time: number }) => void;
  deleteItem: () => void;
}

export const TrackingItem: React.FC<Props> = ({
  toggleTimer,
  item,
  setTimer,
  deleteItem,
}) => {
  const handleTimerOnClick = () => {
    toggleTimer();
    if (!item.active) {
      // zastav počítání času
      document.title = "Project Tracker";
      let totalTime = 0;
      item.outputs.forEach((val) => {
        let diff = Math.ceil(
          ((val.end as Date).getTime() - val.start.getTime()) / (1000 * 60)
        );
        totalTime = totalTime + diff;
      });
      setTimer({ id: item.id as number, time: totalTime });
    }
    if (item.active) {
      //start počítání času
      document.title = `🔴In progress - ${item.name}`;
    }
  };

  return (
    <>
      {item.active ? (
        <span className="relative flex">
          <div className="absolute -top-1.5 right-0.5 h-4 w-4">
            <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          </div>
          <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
        </span>
      ) : null}
      <div className="mb-2 grid grid-cols-6 rounded-lg bg-gray-200/25 p-3 shadow">
        <div className="col-span-3 text-start">
          <span>{item.name}</span>
        </div>
        <div>Time: {((item.time ?? 0) / 60).toFixed(2)}</div>
        <div>
          {(item.rate * ((item.time ?? 0) / 60)).toFixed(2)} {item.currency}
        </div>
        <div className="flex justify-end gap-2">
          <IconButton onClick={handleTimerOnClick}>
            {!item.active ? <PlayIcon /> : <PauseIcon />}
          </IconButton>
          {/*           <IconButton>
            <PencilIcon />
          </IconButton> */}
          <IconButton onClick={deleteItem}>
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
