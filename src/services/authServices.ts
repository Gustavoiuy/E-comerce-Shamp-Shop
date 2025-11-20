import axios from 'axios'


//config database
const API_URL = import.meta.env.VITE_BACKEND_URL +'/auth'

//cookies include the petitions
axios.defaults.withCredentials = true 


export const getProfileService = async () => {
    // Get user profile
    try {
        const response = await axios.get(`${API_URL}/profile`);
      
        return response.data;

    } catch (error) {
        throw new Error('error al obtener el perfil')
    }
}

export const loginService = async (data:any,reset:any,setRedirect:any,setUserInfo:any) => {
    // Login user
    try {
            const response = await axios.post(`${API_URL}/login`,data,{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
    })
    //if response is success
    if(response.status === 200){
        setUserInfo(response.data)
        reset()
        setRedirect(true)
        return {
            succes:true,
            message:'inicio de sesion exitoso'
        }
    }    
    } catch (error) {
        console.log('Error al logearse')
        return{
            succes:false, 
            message:'error al logearse'
        } 
        

    }

}
//setRedirect,checkSession
export const RegisterService = async (data:any,reset:any, setRedirect:any,checkSession:any) => {
    // Register user
    try {
        
            const response = await axios.post(`${API_URL}/register`,data,{
                headers: {'Content-Type': 'application/json'},
                withCredentials: true,
            })
            if(response.status === 2001 || 200){
              // Verify the session on the server after registration
              await checkSession()
                    reset(); 
                    setRedirect(true)
                return {
                    message:true
                }
            }
             
    } catch (error) {
           return {message:false}
        
    }
}


export const LogoutFormService = async () => {
    // Logout user
    try {
         const response = await axios.post(`${API_URL}/logout`)
        return response.data

    } catch (error) {
        throw new Error('Error al cerrar la session')
    }
   
}    