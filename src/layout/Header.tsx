import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const trackingPageNavigate = () => navigate("/tracking");
  const dashboardPageNavigate = () => navigate("/dashboard");
  return (
    <header className="mb-2 flex justify-between px-5 py-3 shadow-md">
      <ul className="flex cursor-pointer flex-row gap-3">
        <li className="hover:text-amber-400" onClick={trackingPageNavigate}>
          Tracking
        </li>
        <li className="hover:text-amber-400" onClick={dashboardPageNavigate}>
          Dashboard
        </li>
      </ul>
      <ul className="flex cursor-pointer flex-row gap-4">
        <li className="hover:text-amber-400">login</li>
      </ul>
    </header>
  );
};

export default Header;
