import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSpecificPlayer from '../hooks/useSpecificPlayer';
import useAuth from '../hooks/useAuth';
import '../styles.css';

const Profile = () => {
  const auth = useAuth();
  const { player, isLoading } = useSpecificPlayer(auth?.user?.id);

  const [state, setState] = useState({
    username: auth?.user?.username,
    password: '',
  });

  if (!auth.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (isLoading || !player) {
    return <h1>Loading...</h1>;
  }

  const playerInfo = player;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    fetch(`/api/player/${auth.user.id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: state.username,
        id: auth.user.id,
      }),
    });

    console.log('hit!!!');
  };

  return (
    <div>
      <div className="section">
        <h1>My Public Information</h1>
        <div className="grid-container">
          <div className="grid-item">
            <label>Username</label>
            <p>{playerInfo.username}</p>
          </div>
          <div className="grid-item">
            <label>Status</label>
            <p>
              {playerInfo.statuses.map((status) => (
                <p key={playerInfo.username + ':' + status}>
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
          <div className="grid-item">
            <label>Timezone</label>
            <p>{playerInfo.timezone}</p>
          </div>
          <div className="grid-item">
            <label>Players Needed</label>
            <p>{playerInfo.num_players}</p>
          </div>
          <div className="grid-item">
            <label>Platform</label>
            <p>{playerInfo.platform}</p>
          </div>
          <div className="grid-item">
            <label>Mods</label>
            <p>{playerInfo.mods}</p>
          </div>

          <div className="grid-item">
            <label>Invite Code</label>
            <input type="text" id="username" value="AJF72H" />
            <input type="checkbox" id="inviteCode" name="inviteCode"></input>
            Public
          </div>
          <div className="grid-item">
            <label>Notes</label>
            <textarea
              type="text"
              id="notes"
              className="largeInputField"
              value={playerInfo.notes}
            ></textarea>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <button className="primaryBtn">Save Changes</button>
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Change Username</h1>
        <div className="grid-container">
          <div className="grid-item">
            <label>New Username</label>
            <input
              type="text"
              id="username"
              value={state.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <h1>Change Password</h1>
        <div className="grid-container">
          <div className="grid-item">
            <label>Old Password</label>
            <input type="text" id="oldPassword" />
          </div>
          <div className="grid-item">
            <label>New Password</label>
            <input type="text" id="newPassword" />
          </div>
          <div className="grid-item">
            <label>Confirm New Password</label>
            <input type="text" id="confirmNewPassword" />
          </div>
          <div className="grid-item">
            <button className="primaryBtn" onClick={handleSubmitClick}>
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="section section-danger">
        <h1>Danger Zone</h1>
        <div className="grid-container">
          <div className="grid-item">
            <button className="dangerBtn">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
