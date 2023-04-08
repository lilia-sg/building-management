import { createContext, useState } from "react";

// TODO: Do I need to keep the whole user or just isLoggedIn? 
const initalAuthState = {
    user: {},
    onLogin: (user) => {},
    onLogout: () => {},
    isAuthenticated: false
}
export const AuthContext = createContext(initalAuthState);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(initalAuthState.user);

    const logoutHandler = () => {
        setUser(initalAuthState.user);
    }

    const loginHandler = (user) => {
        if (user) {
            setUser(user);
        }
    }

    return (
        <AuthContext.Provider
          value={{
            user: user,
            onLogout: logoutHandler,
            onLogin: loginHandler,
            isAuthenticated: !!user.accessToken
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );
}