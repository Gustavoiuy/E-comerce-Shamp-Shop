import { createContext, useContext, useState, useEffect } from "react";
import { getProfileService } from "../services/authServices";

// ------------- Types -------------
interface User {
  id: string;
  username?: string;
  email?: string;
  isAdmin:boolean;
}

export interface UserContextType {
  userInfo: User | null;
  setInfo: (user: User | null) => void;
  loading: boolean;
  checkSession: () => Promise<void>;
  getUserId: () => string | null;
  isAuthenticated: () => boolean;
}

// ------------- Context -------------
export const UserContext = createContext<UserContextType | null>(null);

// ------------- Provider -------------
export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [userInfo, setInfo] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Validate active session
  const checkSession = async () => {
    try {
        setLoading(true);
        const userData = await getProfileService();
        setInfo(userData);
    } catch (error) {
      console.log("No hay sesión activa");
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  const getUserId = () => userInfo?.id ?? null;

  const isAuthenticated = () => Boolean(userInfo?.id);

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setInfo,
        loading,
        checkSession,
        getUserId,
        isAuthenticated,
      }}>
      {children}
    </UserContext.Provider>
  );
};

// ------------- Custom Hook -------------
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser debe usarse dentro de UserContextProvider");
  }

  return context;
};
