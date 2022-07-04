import {createContext, useContext, useState} from 'react';

export const userContext = createContext();

export const useLogin = () => useContext(userContext);

export const UserProvider = ({children}) => {
  const [loggedIn, SetLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const toggleLogin = () => {
    console.log(loggedIn);
    const newUser = prompt('Hello User. What is Your Name?');
    SetLoggedIn(true);
    setUser(newUser);
  };

  const toggleLogout = () => {
    SetLoggedIn(!loggedIn);
  };

  return (
    <userContext.Provider value={{user, loggedIn, toggleLogin, toggleLogout}}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
