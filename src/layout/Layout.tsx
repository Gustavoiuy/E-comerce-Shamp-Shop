import { Outlet } from "react-router"
import { Navbar } from "../ui/components/navbar/Navbar"


export const Layout = () => {
  return (
    <div className="w-full max-w-1000px mx-auto px-6 pb-10">
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
