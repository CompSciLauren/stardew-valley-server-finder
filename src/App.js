import React from 'react';
import './App.css';
import TableFilter from 'react-table-filter';
import './table-styles.css';
import './example.scss';
import useService from './hooks/useService';
import useModService from './hooks/useModService';
import usePlayerModService from './hooks/usePlayerModService';
import { NavLink, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import useAuth, { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <header className="App-header">
          <img src="main_logo.png" className="App-logo" alt="logo" />
          <p>Stardew Valley Server Finder</p>
        </header>

        <Navigation />
        <Main />
      </div>
    </AuthProvider>
  );
};

export default App;

const Home = () => {
  const { isLoading, data, setData } = useService();

  if (isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  const _filterUpdated = (newData) => {
    setData(newData);
  };
  return (
    <table>
      <thead>
        <TableFilter rows={data} onFilterUpdate={_filterUpdated}>
          <th
            key="user"
            filterkey="user"
            className="cell"
            casesensitive={'true'}
            showsearch={'true'}
          >
            User
          </th>
          <th key="status_id" filterkey="playerStatuses" className="cell">
            Status
          </th>
          <th key="timezone" filterkey="timezone" className="cell">
            Timezone
          </th>
          <th key="num_players" filterkey="num_players" className="cell">
            Players Needed
          </th>
          <th key="platform" filterkey="platform" className="cell">
            Platform
          </th>
          <th
            key="mods"
            filterkey="mods"
            className="cell"
            casesensitive={'true'}
            showsearch={'true'}
          >
            Mods
          </th>
          <th key="invite_code">Invite Code</th>
          <th key="notes">Notes</th>
        </TableFilter>
      </thead>
      <tbody>
        {data.map((player) => (
          <tr key={player.id}>
            <td className="cell">{player.username}</td>
            <td className="cell">
              {player.playerStatuses.map((status) => (
                <p key={player.username + ':' + status}>{status}</p>
              ))}
            </td>
            <td className="cell">{player.timezone}</td>
            <td className="cell">{player.num_players}</td>
            <td className="cell">{player.platform}</td>
            <td className="cell">{player.mods}</td>
            <td className="cell">
              <p>DM me</p>
            </td>
            <td className="cell">{player.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Mods = () => {
  const { isLoading, data } = useModService();
  const { isLoading1, modPlayerData, setData } = usePlayerModService();

  if (isLoading || !data || isLoading1 || !modPlayerData) {
    return <h1>Loading...</h1>;
  }
  const _filterUpdated = (newData) => {
    setData(newData);
  };
  //console.log(data);
  console.log(modPlayerData);
  const mod1Data = modPlayerData[0];
  const mod2Data = modPlayerData[1];
  const mod3Data = modPlayerData[2];
  const mod4Data = modPlayerData[3];
  const mod5Data = modPlayerData[4];
  console.log(mod1Data);
  console.log(mod2Data);
  console.log(mod3Data);
  console.log(mod4Data);
  console.log(mod5Data);

  if (
    isLoading ||
    !data ||
    isLoading1 ||
    !modPlayerData ||
    !mod1Data ||
    !mod2Data
  ) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Top 5 Popular Mods</h1>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>{data[0].name}</td>
          <td>{data[0].desc}</td>
          <td>{data[0].creator}</td>
          <td>{data[0].contact}</td>
          <td>{data[0].lastupdate}</td>
        </tr>
      </table>
      <p>
        <b>Servers Running this Mod</b>
      </p>
      <table>
        <thead>
          <TableFilter rows={mod1Data} onFilterUpdate={_filterUpdated}>
            <th
              key="username"
              filterkey="username"
              className="cell"
              casesensitive={'true'}
              showsearch={'true'}
            >
              User
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="num_players" filterkey="num_players" className="cell">
              # of Players
            </th>
            <th key="platform" filterkey="Platform" className="cell">
              Platform
            </th>
            <th key="mods" filterkey="Mods" className="cell">
              Mods
            </th>
          </TableFilter>
        </thead>
        <tbody>
          {mod1Data.map((m) => (
            <tr>
              <td className="cell">{m.username}</td>
              <td className="cell">{m.timezone}</td>
              <td className="cell">{m.num_players}</td>
              <td className="cell">{m.platform}</td>
              <td className="cell">{m.mods}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>{data[1].name}</td>
          <td>{data[1].desc}</td>
          <td>{data[1].creator}</td>
          <td>{data[1].contact}</td>
          <td>{data[1].lastupdate}</td>
        </tr>
      </table>
      <p>
        <b>Servers Running this Mod</b>
      </p>
      <table>
        <thead>
          <TableFilter rows={mod2Data} onFilterUpdate={_filterUpdated}>
            <th
              key="username"
              filterkey="username"
              className="cell"
              casesensitive={'true'}
              showsearch={'true'}
            >
              User
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="num_players" filterkey="num_players" className="cell">
              # of Players
            </th>
            <th key="platform" filterkey="Platform" className="cell">
              Platform
            </th>
            <th key="mods" filterkey="Mods" className="cell">
              Mods
            </th>
          </TableFilter>
        </thead>
        <tbody>
          {mod2Data.map((m) => (
            <tr>
              <td className="cell">{m.username}</td>
              <td className="cell">{m.timezone}</td>
              <td className="cell">{m.num_players}</td>
              <td className="cell">{m.platform}</td>
              <td className="cell">{m.mods}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>{data[2].name}</td>
          <td>{data[2].desc}</td>
          <td>{data[2].creator}</td>
          <td>{data[2].contact}</td>
          <td>{data[2].lastupdate}</td>
        </tr>
      </table>
      <p>
        <b>Servers Running this Mod</b>
      </p>

      <table>
        <thead>
          <TableFilter rows={mod3Data} onFilterUpdate={_filterUpdated}>
            <th
              key="username"
              filterkey="username"
              className="cell"
              casesensitive={'true'}
              showsearch={'true'}
            >
              User
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="num_players" filterkey="num_players" className="cell">
              # of Players
            </th>
            <th key="platform" filterkey="Platform" className="cell">
              Platform
            </th>
            <th key="mods" filterkey="Mods" className="cell">
              Mods
            </th>
          </TableFilter>
        </thead>
        <tbody>
          {mod3Data.map((m) => (
            <tr>
              <td className="cell">{m.username}</td>
              <td className="cell">{m.timezone}</td>
              <td className="cell">{m.num_players}</td>
              <td className="cell">{m.platform}</td>
              <td className="cell">{m.mods}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>{data[3].name}</td>
          <td>{data[3].desc}</td>
          <td>{data[3].creator}</td>
          <td>{data[3].contact}</td>
          <td>{data[3].lastupdate}</td>
        </tr>
      </table>
      <p>
        <b>Servers Running this Mod</b>
      </p>
      <table>
        <thead>
          <TableFilter rows={mod4Data} onFilterUpdate={_filterUpdated}>
            <th
              key="username"
              filterkey="username"
              className="cell"
              casesensitive={'true'}
              showsearch={'true'}
            >
              User
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="num_players" filterkey="num_players" className="cell">
              # of Players
            </th>
            <th key="platform" filterkey="Platform" className="cell">
              Platform
            </th>
            <th key="mods" filterkey="Mods" className="cell">
              Mods
            </th>
          </TableFilter>
        </thead>
        <tbody>
          {mod4Data.map((m) => (
            <tr>
              <td className="cell">{m.username}</td>
              <td className="cell">{m.timezone}</td>
              <td className="cell">{m.num_players}</td>
              <td className="cell">{m.platform}</td>
              <td className="cell">{m.mods}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>{data[4].name}</td>
          <td>{data[4].desc}</td>
          <td>{data[4].creator}</td>
          <td>{data[4].contact}</td>
          <td>{data[4].lastupdate}</td>
        </tr>
      </table>
      <p>
        <b>Servers Running this Mod</b>
      </p>
      <table>
        <thead>
          <TableFilter rows={mod5Data} onFilterUpdate={_filterUpdated}>
            <th
              key="username"
              filterkey="username"
              className="cell"
              casesensitive={'true'}
              showsearch={'true'}
            >
              User
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="num_players" filterkey="num_players" className="cell">
              # of Players
            </th>
            <th key="platform" filterkey="Platform" className="cell">
              Platform
            </th>
            <th key="mods" filterkey="Mods" className="cell">
              Mods
            </th>
          </TableFilter>
        </thead>
        <tbody>
          {mod5Data.map((m) => (
            <tr>
              <td className="cell">{m.username}</td>
              <td className="cell">{m.timezone}</td>
              <td className="cell">{m.num_players}</td>
              <td className="cell">{m.platform}</td>
              <td className="cell">{m.mods}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Navigation = () => {
  const auth = useAuth();
  console.log(auth);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mods">Mods</NavLink>
        </li>
        {auth.isLoggedIn && (
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        )}
        <li>
          {!auth.isLoggedIn ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink onClick={auth.logout} to="/login">
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

const Main = () => (
  <Switch>
    <Route key="0" exact path="/" component={Home}></Route>
    <Route key="1" exact path="/mods" component={Mods}></Route>
    <Route key="2" exact path="/login" component={Login}></Route>
    <Route key="3" exact path="/profile" component={Profile}></Route>
  </Switch>
);
