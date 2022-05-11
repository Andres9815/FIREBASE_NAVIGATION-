import React, { useEffect, useState } from 'react';
import { Auth, getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth: Auth = getAuth();

export function useAuthentication() {
  const [ user, setUser ] = useState<User>();

  useEffect(()=> {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth,(user)=>{
      if (user) {
        // Usuario esta loggeado. 
        setUser(user);
      } else{
        // Usuario no esta loggeado. 
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return { user };

}