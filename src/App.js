import React from 'react';
import './App.css';
import TableFilter from 'react-table-filter';
import './styles.css';
import './example.scss';
import useService from './hooks/useService';
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
          <td>Infinite Life Mod</td>
          <td>Gives you infinite life</td>
          <td>The Lifegiver</td>
          <td>life.giver@email.nah</td>
          <td>2020-05-09</td>
        </tr>
      </table>
      <h><b>Servers go here</b></h>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>One Hit Death Mod</td>
          <td>Everything kills in one hit. For the hardcore.</td>
          <td>The Deathbringer</td>
          <td>death.bringer@email.nah</td>
          <td>2020-04-17</td>
        </tr>
      </table>
      <h><b>Servers go here</b></h>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>Infinite Money</td>
          <td>Gives you infinite money</td>
          <td>The Moneylender</td>
          <td>money.lender@email.nah</td>
          <td>2020-02-14</td>
        </tr>
      </table>
      <h><b>Servers go here</b></h>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>No Money Mod</td>
          <td>You cannot earn money, everything you have to earn yourself.</td>
          <td>The Money Taker</td>
          <td>Money.Taker@email.nah</td>
          <td>2020-04-17</td>
        </tr>
      </table>
      <h><b>Servers go here</b></h>
      <table>
        <tr>
          <th>Mod Name</th>
          <th>Mod Description</th>
          <th>Mod Creator</th>
          <th>Creator Contact</th>
          <th>Last Updated</th>
        </tr>
        <tr>
          <td>Farm Helper Mod</td>
          <td>Installs a pop-up helper to help you manage your farm!</td>
          <td>The Farm Helper</td>
          <td>Farm.Helper@email.nah</td>
          <td>2020-04-17</td>
        </tr>
      </table>
      <h><b>Servers go here</b></h>
    </div>
  )};
  const Mods = () => {
    return(
      <table>
        <th>Name</th>
        <th>Description</th>
        <th>Creator</th>
        <th>Contact</th>
        <th>Last Update</th>
      </table>
    )
  }
  const Account = () => {
    return(
      <h>Nothing Here Yet.</h>
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
