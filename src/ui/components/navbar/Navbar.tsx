// src/components/navbar/Navbar.tsx
import { Link } from "react-router";
import { AuthButtons } from "./AuthButtons";
import { Cart } from "./Cart";
import { UserDropdown } from "./UserDropdown";
import { useUser } from "../../../context/userContext";

export const Navbar = () => {
  const {userInfo,loading} = useUser()
  return (
    <header>
      <AuthButtons />
      <nav className="navbar bg-base-100 shadow-sm lg:rounded-box w-full">
        <div className="navbar-start">
          <Link className="btn btn-ghost text-xl"to="/home">
          E-comerce
          </Link>
        </div>  
        <div className="navbar-end gap-3">
          {
              userInfo?.isAdmin &&( <a href=""className="btn btn-primary">Dashboard</a>)
          }
          <Cart />
          {
            !loading && userInfo?.username &&  <UserDropdown />
          }
          
          
         
        </div>
      </nav>
    </header>
  );
};
