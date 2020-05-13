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
  

function convertStatusIdToHumanReadableStatusForPlatform(platformId) {
  switch (platformId) {
    case 1: {
      return 'PC';
    }
    case 2: {
      return 'Switch';
    }
    case 3: {
      return 'Xbox';
    }
    case 4: {
      return 'PS4';
    }
    default: {
      throw new Error('Frontend does not support this mod');
    }
  }
}

function convertStatusIdToHumanReadableStatusForMod(modId) {
  switch (modId) {
    case 0: {
      return 'None';
    }
    case 1: {
      return 'Infinite Life Mod'
    }
    case 2: {
      return 'One Hit Death Mod'
    }
    case 3: {
      return 'Infinite Money'
    }
    case 4: {
      return 'No Money Mod'
    }
    case 5: {
      return 'Farm Helper'
    }
    default: {
      return 'None';
    }
  }
}

  const usePlayerModService = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mod1Data, setData] = useState(null);
  
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
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList.push(player);

          });


          console.log(modList);
          setData(modList);
        }
      );
  

    }, []);
  
    return {
      isLoading,
      mod1Data,
    };
  }; 
  export default usePlayerModService;
  