/*useMods.js*/

import { useState, useEffect } from 'react';

export default function useMods(modIdentifier) {
  const [game_mod, setgame_Mod] = useState([]);
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
        fetch(`/game_mod`, {
          method: 'GET',
        })
          .then((response) => response.json())
          //If response is in json then in success
          .then((responseJson) => {
            //Success

            setIsLoading(false);
            if (responseJson != null) {
              setgame_Mod(responseJson);
            } else {
              setgame_Mod(emptyJson);
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
    game_mod,
    isLoading,
  };
}
