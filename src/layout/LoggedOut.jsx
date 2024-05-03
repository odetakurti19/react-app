import { Link, Outlet } from "react-router-dom";

const LoggedOut = () => {
  return (
    <>
      <div className="outlet">
        <Outlet></Outlet>
      </div>

    </>
  );
};

export default LoggedOut;