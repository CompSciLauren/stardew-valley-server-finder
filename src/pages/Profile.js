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
        <div class="grid-container">
          <div class="grid-item">
            <label>Username</label>
            <p>{playerInfo[0].username}</p>
          </div>
          <div class="grid-item">
            <label>Status</label>
            <p>
              {' '}
              {playerInfo[0].playerStatuses.map((status) => (
                <p key={playerInfo[0].username + ':' + status}>
                  {status}
                  <input
                    type="checkbox"
                    id="statusCheckbox"
                    name="statusCheckbox"
                  ></input>
                </p>
              ))}
            </p>
          </div>
          <div class="grid-item">
            <label>Timezone</label>
            <p>{playerInfo[0].timezone}</p>
          </div>
          <div class="grid-item">
            <label>Players Needed</label>
            <p>{playerInfo[0].num_players}</p>
          </div>
          <div class="grid-item">
            <label>Platform</label>
            <p>{playerInfo[0].platform}</p>
          </div>
          <div class="grid-item">
            <label>Mods</label>
            <p>{playerInfo[0].mods}</p>
          </div>

          <div class="grid-item">
            <label>Invite Code</label>
            <input type="username" id="username" value="AJF72H" />
            <input type="checkbox" id="inviteCode" name="inviteCode"></input>
            Public
          </div>
          <div class="grid-item">
            <label>Notes</label>
            <input
              type="text"
              id="notes"
              class="largeInputField"
              value={playerInfo[0].notes}
            ></input>
          </div>
        </div>
      </div>

      <h1>Change Username</h1>
      <div class="grid-container">
        <div class="grid-item">
          <label>New Username</label>
          <input type="username" id="username" value={playerInfo[0].username} />
        </div>
      </div>

      <h1>Change Password</h1>
      <div class="grid-container">
        <div class="grid-item">
          <label>Old Password</label>
          <input type="oldPassword" id="oldPassword" />
        </div>
        <div class="grid-item">
          <label>New Password</label>
          <input type="newPassword" id="newPassword" />
        </div>
        <div class="grid-item">
          <label>Confirm New Password</label>
          <input type="confirmNewPassword" id="confirmNewPassword" />
        </div>
        <div class="grid-item">
          <button class="primaryBtn">Save Changes</button>
          <button class="primaryBtn">Logout</button>
          <button class="dangerBtn">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;