/*usePlayerServer.js*/

import { useState, useEffect } from 'react';

export default function usePlayerServer(personIdentifier) {
  const [playerServer, setPlayerServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    ID: -1,
    Display_Name: 'none',
  };

  useEffect(() => {
    async function loadData(){
    if (personIdentifier !== null) {
      setIsLoading(true);

      fetch(`https://localhost:8081/playerServer/${personIdentifier}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
          //Success

          setIsLoading(false);
          if (responseJson[0] != null) {
            setPlayerServer(responseJson);
          } else {
            setPlayerServer(emptyJson);
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
    playerServer,
    isLoading,
  };
}
