import React from 'react';
import useService from '../hooks/useService';

const Profile = () => {
  const { isLoading, data, setData } = useService();

  if (isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  const playerInfo = [];
  data.map((data) => {
    if (data.username === 'CompSciLauren') {
      playerInfo.push(data);
    }
  });

  return (
    <div>
      <div>
        <p>Your Public Information:</p>
        <p>Username: {playerInfo[0].username}</p>
        <p>
          Status:{' '}
          {playerInfo[0].playerStatuses.map((status) => (
            <p key={playerInfo[0].username + ':' + status}>{status}</p>
          ))}
        </p>
        <p>Timezone: {playerInfo[0].timezone}</p>
        <p>Players Needed: {playerInfo[0].num_players}</p>
        <p>Platform: {playerInfo[0].platform}</p>
        <p>Mods: {playerInfo[0].mods}</p>
        <p>Invite Code: DM me</p>
        <p>Notes: {playerInfo[0].notes}</p>
      </div>
      <div>
        <p>Your Private Information:</p>
        <p>Invite Code:</p>
      </div>
      <div>
        <p>Options:</p>
        <p>Change Username</p>
        <p>Change Password</p>
        <p>Delete Account</p>
      </div>
    </div>
  );
};

export default Profile;
