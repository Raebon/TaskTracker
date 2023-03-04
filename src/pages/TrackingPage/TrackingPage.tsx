import React, { useState } from "react";
import { TrackingItem, AddItem } from "./components/";

const data = [
  {
    name: "Project 4/3/2022",
    start: undefined,
    end: undefined,
    active: true,
  },
  {
    name: "ProjectA 4/3/2022",
    start: undefined,
    end: undefined,
    active: false,
  },
];

const TrackingPage = () => {
  const [item, setItem] = useState<string>("");

  const hadnleOnChangeItem = (e: React.ChangeEvent<HTMLInputElement>) =>
    setItem(e.target.value);
  return (
    <div>
      <div className="m-2">
        <AddItem value={item} onChange={hadnleOnChangeItem} />
      </div>
      <div className="grid-row m-2 grid">
        {data.map((item, index) => (
          <TrackingItem key={index} title={item.name} active={item.active} />
        ))}
      </div>
    </div>
  );
};

export default TrackingPage;
