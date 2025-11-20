import { Outlet } from "react-router"
import { Navbar } from "../ui/components/navbar/Navbar"
import { SideCart } from "../ui/components/cart/SideCart"


export const Layout = () => {
  return (
    <div className="w-full max-w-1000px mx-auto px-6 pb-10">
    <Navbar/>
    <SideCart />
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
