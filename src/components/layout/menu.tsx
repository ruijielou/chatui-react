import { NavLink, Link, useNavigate } from "react-router-dom";
const Menus = () => {
  // 点击跳转页面
  const navigate = useNavigate();
  const clickMenu = (key: string): void => {
    navigate(key);
  };
  return (
    <div>
      <div>
        <Link to="/home">home</Link>
        <Link to="/about">about</Link>
      </div>
      <div>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          home
        </NavLink>
        <NavLink to="/about">about</NavLink>
      </div>
      <div>
        {/* e: React.MouseEvent<HTMLDivElement, MouseEvent> */}
        <span onClick={() => clickMenu("home")}>home</span>
        <span onClick={() => clickMenu("about")}>about</span>
      </div>
    </div>
  );
};

export default Menus;
