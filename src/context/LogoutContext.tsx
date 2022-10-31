import { createContext, useState, useContext, useEffect } from 'react'
import { logout } from '../utils';

interface LogoutType {
  timer: number;
};

const initialTime = 600000
export const LogoutContext = createContext<LogoutType>({timer: initialTime})

const LogoutProvider =  ({ children }: { children: JSX.Element })  => {
    const [timer, setTimer] = useState(initialTime)

    useEffect(() => {
      const timer = setTimeout(() => {
        console.log('This will run after 1 second!')
        setTimer(initialTime)
        logout()
      }, initialTime); 

      return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
      timer > 0 && setTimeout(() => setTimer(timer - 1000), 1000);
    }, [timer]);

    return (
        <LogoutContext.Provider
            value={{
              timer
            }}
        >
            {children}
        </LogoutContext.Provider>
    )
}

export function useLogout() {
    const context = useContext(LogoutContext)
    if (!context) {
        throw new Error('useMap must be used within a LogoutProvider')
    }
    const { timer } = context
    return {
      timer
    }
}

export default LogoutProvider;