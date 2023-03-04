import React, { useState } from "react";
import { TrackingItem, AddItem } from "./components/";

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
        <TrackingItem title="test" />
      </div>
    </div>
  );
};

export default TrackingPage;
