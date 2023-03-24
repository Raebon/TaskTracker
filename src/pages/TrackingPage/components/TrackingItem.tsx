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
  const [timeElapsed, setTimeElapsed] = useState<number>(item.time as number);
  const intervalRef = useRef<any>(null);

  const handleTimerOnClick = () => {
    toggleTimer();
    let time = timeElapsed;
    if (item.active) {
      //start počítání času
      intervalRef.current = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
        time = time + 1;
        document.title = `🔴 ${(time / 3600).toFixed(2)} - ${item.name}`;
        console.log(time);
      }, 1000);
    } else {
      document.title = "Project Tracker";
      // zastav počítání času
      setTimer({ id: item.id as number, time });
      clearInterval(intervalRef.current);
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
        <div>Time: {(timeElapsed / 3600).toFixed(2)}</div>
        <div>
          {(item.rate * (timeElapsed / 3600)).toFixed(2)} {item.currency}
        </div>
        <div className="flex justify-end gap-2">
          <IconButton onClick={handleTimerOnClick}>
            {!item.active ? <PlayIcon /> : <PauseIcon />}
          </IconButton>
          <IconButton>
            <PencilIcon />
          </IconButton>
          <IconButton onClick={deleteItem}>
            <TrashIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
