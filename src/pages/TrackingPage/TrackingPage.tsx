import React, { useState } from "react";
import { TrackingItem, AddItem } from "./components/";
//import jsonData from "./data.json";
import { ConfirmModal } from "../../components/modal/ConfirmModal";
import { TrackItemType } from "../../utils/types";

const updateTrackData = (newData: TrackItemType[]) => {
  localStorage.setItem("trackData", JSON.stringify(newData));
};

const TrackingPage = () => {
  const jsonData = localStorage.getItem("trackData") ?? "";
  const trackData: TrackItemType[] = jsonData ? JSON.parse(jsonData) : [];
  const [selectedTrackItem, setSelectedTrackItem] = useState<TrackItemType>({
    id: 0,
    name: "",
    active: false,
    time: 0,
    rate: 0,
    currency: "",
  });
  const [data, setData] = useState<TrackItemType[]>(trackData);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleToggleActiveProject = (id: number) => {
    const toogleActiveProject = data.map((item) => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    });
    setData(toogleActiveProject);
  };

  const handleTimer = (e: { time: number; id: number }) => {
    const { time, id } = e;
    const setTimeProject = data.map((item) => {
      if (item.id === id) {
        item.time = time;
      }
      return item;
    });
    updateTrackData(setTimeProject);
    setData(setTimeProject);
  };

  const handleDeleteItem = () => {
    let updatedData = data.filter((val) => val.id !== selectedTrackItem.id);
    updateTrackData(updatedData);
    setData(updatedData);
    toggleDeleteModal();
  };

  const handleAddItem = (e: TrackItemType) => {
    let payload: TrackItemType = {
      ...e,
      id: data[data.length - 1] ? (data[data.length - 1].id as number) + 1 : 1,
      active: false,
      time: 0,
    };
    setData((prevState) => {
      updateTrackData([...prevState, payload]);
      return [...prevState, payload];
    });
  };

  const setCurrentProject = (e: any) => setSelectedTrackItem(e);

  const toggleDeleteModal = () => setShowDeleteModal((prevState) => !prevState);
  return (
    <>
      <div className="m-2">
        <AddItem addProject={handleAddItem} />
      </div>
      <div className="grid-row m-2 grid">
        {data.map((item, index) => (
          <div key={index} onClick={() => setCurrentProject(item)}>
            <TrackingItem
              item={item}
              setTimer={handleTimer}
              deleteItem={toggleDeleteModal}
              toggleTimer={() => handleToggleActiveProject(item.id as number)}
            />
          </div>
        ))}
      </div>
      <ConfirmModal
        showModal={showDeleteModal}
        closeModal={toggleDeleteModal}
        confirmButton={handleDeleteItem}
      />
    </>
  );
};

export default TrackingPage;
