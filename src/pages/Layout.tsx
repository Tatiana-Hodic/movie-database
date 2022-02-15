import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Overview</Link> |{" "}
            </li>
            <li>
            <Link to="detail">Detail</Link>
            </li>
            <li>
            <Link to="favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Layout;
