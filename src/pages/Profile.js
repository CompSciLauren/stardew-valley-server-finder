import React from 'react';
import useService from '../hooks/useService';
import '../styles.css';

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
        <h1>My Public Information</h1>
        <label>Username</label>
        <p>{playerInfo[0].username}</p>
        <label>Status</label>
        <p>
          {' '}
          {playerInfo[0].playerStatuses.map((status) => (
            <p key={playerInfo[0].username + ':' + status}>{status}</p>
          ))}
        </p>
        <label>Timezone</label>
        <p>{playerInfo[0].timezone}</p>
        <label>Players Needed</label>
        <p>{playerInfo[0].num_players}</p>
        <label>Platform</label>
        <p>{playerInfo[0].platform}</p>
        <label>Mods</label>
        <p>{playerInfo[0].mods}</p>
        <label>Invite Code</label>
        <input type="username" id="username" value="AJF72H" />
        <label>Set to public</label>
        <input type="checkbox" id="inviteCode" name="inviteCode"></input>
        <label>Notes</label>
        <input
          type="text"
          id="notes"
          class="largeInputField"
          value={playerInfo[0].notes}
        ></input>
      </div>

      <h1>Options</h1>
      <h2>Change Username</h2>
      <label>New Username</label>
      <input type="username" id="username" value={playerInfo[0].username} />
      <h2>Change Password</h2>
      <label>Old Password</label>
      <input type="oldPassword" id="oldPassword" />
      <label>New Password</label>
      <input type="newPassword" id="newPassword" />
      <label>Confirm New Password</label>
      <input type="confirmNewPassword" id="confirmNewPassword" />
      <button class="primaryBtn">Save Changes</button>
      <button class="primaryBtn">Logout</button>
      <button class="dangerBtn">Delete Account</button>
    </div>
  );
};

export default Profile;
