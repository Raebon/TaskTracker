import { Outlet } from "react-router-dom";
const PageContainer = () => {
  return (
    <div className="min-h-full md:px-[0px] lg:px-[120px] xl:px-[320px]">
      <Outlet />
    </div>
  );
};

export default PageContainer;
