import { useState, useEffect } from 'react';

function loadPlayersWithModData(id) {
    return fetch(`api/mod_players/:id`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
  }
  

  const usePlayerModService = (id) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      console.log('Starting Effect');
      Promise.all([loadPlayersWithModData(id)]).then(
        ([modData]) => {
          console.log(modData);
          setIsLoading(false);
  
          const modList = [];
          modData.forEach((game_mod, index) => {
            modList[index] = game_mod;
          });
  
          console.log(modList);
          setData(modList);
        }
      );
  
      
    }, [id]);
  
    return {
      isLoading,
      data,
    };
  }; 
  export default usePlayerModService;
  