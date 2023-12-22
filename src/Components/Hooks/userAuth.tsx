// userAuth.js
import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";


const client = new Keycloak({
  url: 'http://localhost:4000/',
  realm: 'realm',
  clientId: 'client',
});

const userAuth = () => {
  const isRun = useRef(false);
  const [isLogin, setLogin] = useState(false);
  const [people, setPeople] = useState<Record<string, unknown> | null>(null); // Change the type as needed

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    client.init({ onLoad: 'login-required' }).then((authenticated) => {
      setLogin(authenticated);
      if (authenticated) {
        console.log('Other details:', client.tokenParsed);
        const peopleData = client.tokenParsed || {}; 
        setPeople(peopleData);
      } else {
        console.log('User is not authenticated');
      }
    });
  }, []);

  return { isLogin, people };
};

export default userAuth;
