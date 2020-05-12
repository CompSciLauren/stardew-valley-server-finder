import { useState, useEffect } from 'react';

function loadModData() {  
    return fetch(`/api/game_mod`, {
     method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
  }

/*
function loadPlayersWithModData(put modid here?) {
  return fetch(`api/game_mod` but this also uses player, do we include it?, {
    method: 'GETPLAYER',
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
}
*/

  const useModService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      console.log('Starting Effect');
      Promise.all([loadModData()]).then(
        ([modData]) => {
          console.log(modData);
          setIsLoading(false);
  
          const modList = [];
  
          modData.forEach((game_mod) => {
            modList[game_mod.id] = game_mod;
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

  /*
  const usePlayerModService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      console.log('Starting Effect');
      Promise.all([loadPlayersWithModData()]).then(
        ([modData]) => {
          console.log(modData);
          setIsLoading(false);
  
          const modList = [];

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
*/
  export default useModService;
  