import { useState, useEffect } from 'react';

function loadPlayersWithModData() {
    return fetch(`api/mod_players/1`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
  }
  

  const usePlayerModService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      console.log('Starting Effect');
      Promise.all([loadPlayersWithModData()]).then(
        ([playerData]) => {
          console.log(playerData);
          setIsLoading(false);
  
          const modList = [];
          //copies the playerData to the new list
          playerData.forEach((player) => {
              modList.push(player);
          });


          console.log(modList);
          setData(modList);
        }
      );
  

    }, []);
  
    return {
      isLoading,
      data,
    };
  }; 
  export default usePlayerModService;
  