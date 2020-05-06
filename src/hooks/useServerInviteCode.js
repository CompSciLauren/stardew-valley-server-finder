/*useServerInviteCode.js*/

import { useState, useEffect } from 'react';

export default function useserverInviteCode(personIdentifier) {
  const [serverInviteCode, setServerInviteCode] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    ID: -1,
    Display_Name: 'none',
  };

  useEffect(() => {
    async function loadData(){
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://localhost:3000/serverInviteCode/${personIdentifier}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success

          setIsLoading(false);
          if (responseJson[0] != null) {
            setServerInviteCode(responseJson);
          } else {
            setServerInviteCode(emptyJson);
          }

        })
        //If response is not in json then in error
        .catch((error) => {
          //Error
          console.error(error);
        });
    }}
    loadData();
  }, [personIdentifier]);

  return {
    serverInviteCode,
    isLoading,
  };
}
