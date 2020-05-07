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
        setIsLoading(false);

        const playerList = [];

        playerData.forEach((player) => {
          playerList[player.id] = player;
          const playerEntry = playerList[player.id];
          playerEntry.playerStatuses = getPlayerStatuses(
            playerStatuses,
            player
          );
          // playerEntry.platform = getPlayerPlatform(...)
          // playerEntry.mods = getPlayerMods(...)
        });

        // console.log(playerData);
        // console.log(playerStatus);

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
