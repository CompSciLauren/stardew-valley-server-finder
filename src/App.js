import React from 'react';
import './App.css';
import TableFilter from 'react-table-filter';
import './styles.css';
import './example.scss';
import useService from './hooks/useService';
import useModService from './hooks/useModService'
import {NavLink, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="main_logo.png" className="App-logo" alt="logo" />
        <p>Stardew Valley Server Finder</p>
      </header>

      <Navigation />
      <Main />
    </div>
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
  return(
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
            <p>{status}</p>
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
  )};

const Mods = () => {
  const { isLoading, data} = useModService();

  if (isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  return(
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
      <h><b>Servers Running this Mod</b></h>
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
      <h><b>Servers Running this Mod</b></h>
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
      <h><b>Servers Running this Mod</b></h>
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
      <h><b>Servers Running this Mod</b></h>
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
      <h><b>Servers Running this Mod</b></h>
    </div>
  )};

  const Account = () => {
    return(
      <div>
      <h>Please Enter Your Username and Password</h>
      <form>
      <label>
        Username:
        <input type="text"/>
      </label>
      <label>
        Password:
        <input type="text"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
  };


  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/mods'>Mods</NavLink></li>
        <li><NavLink to='/account'>Account</NavLink></li>
      </ul>
    </nav>
  );


const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/mods' component={Mods}></Route>
    <Route exact path='/account' component={Account}></Route>
  </Switch>
)
