import { Link } from "react-router";
import { Buttons } from "../../Buttons";



export const AuthButtons = () => {

   return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-3">
      <Link to="/register">
      <Buttons variant="outline">Crear cuenta</Buttons>
      </Link>

      <span className="hidden lg:inline text-gray-400">|</span>
      <Link to={'/login'}>
       <Buttons variant="outline">Iniciar sesión</Buttons>
      </Link>
     
    </div>
  );
  
}
