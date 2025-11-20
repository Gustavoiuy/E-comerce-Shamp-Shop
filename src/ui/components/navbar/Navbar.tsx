import { Link, useLocation } from "react-router";
import { Home } from "lucide-react";
import { AuthButtons } from "./AuthButtons";
import { Cart } from "./Cart";
import { UserDropdown } from "./UserDropdown";
import { useUser } from "../../../context/userContext";

export const Navbar = () => {
  const { userInfo, loading } = useUser();
  const location = useLocation();

  const showCart =
    location.pathname === "/home" ||
    location.pathname.startsWith("/detailProduct/");

  return (
    <header>
      <AuthButtons />

      <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full justify-center">

        <div className="navbar-start justify-center">
          <Link
            className="btn btn-ghost text-xl flex items-center justify-center gap-2"
            to="/home"
          >
            <Home className="w-5 h-5 justify-center" />
            Inicio
          </Link>
        </div>

        <div className="navbar-end gap-3">
          {userInfo?.isAdmin && (
            <Link to="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          )}

          {showCart && <Cart />}

          {!loading && userInfo?.username && <UserDropdown />}
        </div>

      </nav>
    </header>
  );
};
