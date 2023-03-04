import { Outlet } from "react-router-dom";
const PageContainer = () => {
  return (
    <div className="min-h-full px-[320px]">
      <Outlet />
    </div>
  );
};

export default PageContainer;
