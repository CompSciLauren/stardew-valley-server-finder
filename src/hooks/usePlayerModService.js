import { useState, useEffect } from 'react';

function loadPlayersWithModData1() {
    return fetch(`api/mod_players/1`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
  }


function loadPlayersWithModData2() {
  return fetch(`api/mod_players/2`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
}

function loadPlayersWithModData3() {
  return fetch(`api/mod_players/3`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
}

function loadPlayersWithModData4() {
  return fetch(`api/mod_players/4`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error(error);
  });
}

function loadPlayersWithModData5() {
  return fetch(`api/mod_players/5`, {
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
<<<<<<< HEAD
    const [modPlayerData, setData] = useState(null);
=======
    const [mod1Data, setData] = useState(null);
>>>>>>> 1e42ee8a5cd23ab9a78d9d8c4d0edc684534fc99
  
    useEffect(() => {
      setIsLoading(true);
      console.log('Starting Effect');          
      const modList1 = [];
      Promise.all([loadPlayersWithModData1()]).then(
        ([playerData]) => {
          //console.log(playerData);
          setIsLoading(false);
  

          //copies the playerData to the new list
          playerData.forEach((player) => {
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList1.push(player);
          });

        }
      );
  
      const modList2 = [];
      Promise.all([loadPlayersWithModData2()]).then(
        ([playerData]) => {
          //console.log(playerData);
          setIsLoading(false);

          //copies the playerData to the new list
          playerData.forEach((player) => {
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList2.push(player);

          });


        }
      );
      const modList3 = [];
      Promise.all([loadPlayersWithModData3()]).then(
        ([playerData]) => {
          //console.log(playerData);
          setIsLoading(false);
  

          //copies the playerData to the new list
          playerData.forEach((player) => {
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList3.push(player);

          });

        }
      );
  
      const modList4 = [];
      Promise.all([loadPlayersWithModData4()]).then(
        ([playerData]) => {
          //console.log(playerData);
          setIsLoading(false);

          //copies the playerData to the new list
          playerData.forEach((player) => {
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList4.push(player);

          });


        }
      );
  
      const modList5 = [];
      Promise.all([loadPlayersWithModData5()]).then(
        ([playerData]) => {
          //console.log(playerData);
          setIsLoading(false);

          //copies the playerData to the new list
          playerData.forEach((player) => {
              player.platform = convertStatusIdToHumanReadableStatusForPlatform(player.platform);
              player.mods = convertStatusIdToHumanReadableStatusForMod(player.mods);
              modList5.push(player);

          });


        }
      );
        const fullList = [];
        fullList.push(modList1);
        fullList.push(modList2);
        fullList.push(modList3);
        fullList.push(modList4);
        fullList.push(modList5);
        setData(fullList);
    }, []);
  
    return {
      isLoading,
      modPlayerData,
    };
  }; 
  export default usePlayerModService;
  