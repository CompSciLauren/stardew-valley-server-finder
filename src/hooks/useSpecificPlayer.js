/*usePlayer.js*/

import { useState, useEffect } from 'react';

export default function usePlayer(personIdentifier) {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function loadData() {
      if (personIdentifier) {
        setIsLoading(true);
        fetch(`/api/player/${personIdentifier}`, {
          method: 'GET',
        })
          // .then(console.log)
          .then((response) => response.json())
          //If response is in json then in success
          .then(async (responseJson) => {
            setIsLoading(false);
            setPlayer(responseJson);
          })
          //If response is not in json then in error
          .catch((error) => {
            console.error(error);
          });
      }
    }
    loadData();
  }, [personIdentifier]);

  return {
    player,
    isLoading,
  };
}
