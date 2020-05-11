/*useMods.js*/

import { useState, useEffect } from 'react';

export default function useMods(modIdentifier) {
  const [mod, setMod] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const emptyJson = {
    ID: -1,
    Display_Name: 'none',
  };

  useEffect(() => {
    async function loadData() {
      if (modIdentifier !== null) {
        setIsLoading(true);

        // fetch(`https://localhost:8081/player/${modIdentifier}`, {
        fetch(`/mods`, {
          method: 'GET',
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
            //Success

            setIsLoading(false);
            if (responseJson != null) {
              setMod(responseJson);
            } else {
              setMod(emptyJson);
            }
          })
          //If response is not in json then in error
          .catch((error) => {
            //Error
            console.error(error);
          });
      }
    }
    loadData();
  }, []);

  return {
    mod,
    isLoading,
  };
}
