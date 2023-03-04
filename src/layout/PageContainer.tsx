import { Outlet } from "react-router-dom";
const PageContainer = () => {
  return (
    <div className=" min-h-full">
      <Outlet />
    </div>
  );
};

export default PageContainer;
