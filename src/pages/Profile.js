import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useSpecificPlayer from '../hooks/useSpecificPlayer';
import useAuth from '../hooks/useAuth';
import '../styles.css';

const Profile = () => {
  const auth = useAuth();
  const { player, isLoading } = useSpecificPlayer(auth?.user?.id);

  const [state, setState] = useState({
    initialUsername: auth?.user?.username,
    username: auth?.user?.username,
    oldPassword: '',
    password: '',
    confirmPassword: '',
    oldPasswordConfirmedToBeCorrect: false,
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

    // no changes were made
    if (state.username === auth.user.username && state.password === '') {
      alert("You didn't make any changes!");
    } else {
      // check if old password was entered correctly
      auth
        .attemptLogin(state.initialUsername, state.oldPassword)
        .then(() => {
          // username and password were successfully changed
          if (
            state.username !== auth.user.username &&
            state.password !== '' &&
            state.password === state.confirmPassword
          ) {
            // change username
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

            // change password
            fetch(`/api/login/${auth.user.id}`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                password: state.password,
                id: auth.user.id,
              }),
            });

            alert(
              'Your changes have been saved! Logout and back in to see the changes.'
            );
          }
          // username changed, password incorrect
          else if (
            state.username !== auth.user.username &&
            state.password !== state.confirmPassword
          ) {
            alert(
              'You need to type the same password under password and confirm password. Try again.'
            );
          }
          // only username was changed
          else if (
            state.username !== auth.user.username &&
            state.password === ''
          ) {
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

            alert(
              'Your changes have been saved! Logout and back in to see the changes.'
            );
          }
          // only password was changed
          else if (
            state.username === auth.user.username &&
            state.password === state.confirmPassword
          ) {
            fetch(`/api/login/${auth.user.id}`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                password: state.password,
                id: auth.user.id,
              }),
            });

            alert(
              'Your changes have been saved! Logout and back in to see the changes.'
            );
          } else {
            alert(
              'You need to type the same password under password and confirm password. Try again.'
            );
          }
        })
        .catch(() => {
          alert(
            'Old password entered is not the correct current password. Try again.'
          );
        });
    }
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
            <button
              className="primaryBtn"
              onClick={() => alert('Sorry, this has not been implemented yet.')}
            >
              Save Changes
            </button>
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
            <input
              type="text"
              id="oldPassword"
              value={state.oldPassword}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>New Password</label>
            <input
              type="text"
              id="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="grid-item">
            <label>Confirm Password</label>
            <input
              type="text"
              id="confirmPassword"
              value={state.confirmPassword}
              onChange={handleChange}
            />
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
            <button
              className="dangerBtn"
              onClick={() => alert('Sorry, this has not been implemented yet.')}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
