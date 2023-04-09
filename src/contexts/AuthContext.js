import { createContext, useState } from "react";

const initialState = {
    user: {},
    onLogin: (user) => {},
    onLogout: () => {},
    isAuthenticated: false
}
export const AuthContext = createContext(initialState);

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(initialState.user);

    const logoutHandler = () => {
        setUser(initialState.user);
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