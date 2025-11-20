import { LogoutFormService } from "../../../services/authServices"
import { useUser } from "../../../context/userContext"
import toast from "react-hot-toast"

export const UserDropdown = () => {
    const {setInfo}= useUser()
    const handleLogout = async ()=>{
        try {
            await LogoutFormService()
            setInfo(null)
            toast.success('Sesion cerrada correctamente')
        } catch (error) {
            toast.error('Error al cerrar la sesion')
        }
    }
  return (
    <div className="dropdown dropdown-end">
        <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img src="/src/assets/userAvatar.jpg" alt="User Avatar" />
        </div>
        
        </div>
        <ul tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
        <li>
            <a className="justify-between" >Perfil
                <span className="badge">Nuevo</span> </a>
        </li>
        <li>
            <a className="justify-between" href="">Configuracion </a>
        </li>
        <li>
            <a onClick={handleLogout} className="justify-between" href="">Cerrar sesion </a>
        </li>
        </ul>

    </div>
  )
}
