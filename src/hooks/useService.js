import { useState, useEffect } from 'react';

function loadPlayerData() {
  return fetch(`/player`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

function loadPlayerStatus() {
  return fetch(`/playerStatus`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

function convertStatusIdToHumanReadableStatus(statusId) {
  switch (statusId) {
    case 1: {
      return 'Hosting';
    }
    case 2: {
      return 'Joining';
    }
    default: {
      throw new Error('Frontend does not support this status');
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
    case 1: {
      return 'Infinite Pizzas';
    }
    default: {
      return 'None';
    }
  }
}

/**
 * Gets the individual, human readable game statuses for the specified player
 *
 * @param {Array} playerStatuses - All of the statuses from the server
 * @param {Object} player - The player to get the human readable status for
 */
function getPlayerStatuses(playerStatuses, player) {
  return playerStatuses
    .filter((status) => status.player_id === player.id)
    .map((status) => status.status_id)
    .map(convertStatusIdToHumanReadableStatus);
}

const useService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    console.log('Starting Effect');
    Promise.all([loadPlayerData(), loadPlayerStatus()]).then(
      ([playerData, playerStatuses]) => {
        console.log(playerData, playerStatuses);
        setIsLoading(false);

        const playerList = [];

        playerData.forEach((player) => {
          playerList[player.id] = player;
          const playerEntry = playerList[player.id];
          playerEntry.playerStatuses = getPlayerStatuses(
            playerStatuses,
            player
          );
          playerEntry.platform = convertStatusIdToHumanReadableStatusForPlatform(
            player.platform
          );
          playerEntry.mods = convertStatusIdToHumanReadableStatusForMod(
            player.mods
          );
        });

        console.log(playerList);
        setData(playerList);
      }
    );
  }, []);

  return {
    isLoading,
    data,
    setData,
  };
};

export default useService;