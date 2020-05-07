import React from 'react';
import './App.css';
import TableFilter from 'react-table-filter';
import './styles.css';
import './example.scss';
import useService from './hooks/useService';

const App = () => {
  const { isLoading, data, setData } = useService();

  if (isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  const _filterUpdated = (newData) => {
    setData(newData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="main_logo.png" className="App-logo" alt="logo" />
        <p>Stardew Valley Server Finder</p>
      </header>

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
            <th key="status_id" filterkey="status_id" className="cell">
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
              <td className="cell">{player.status_id}</td>
              <td className="cell">{player.timezone}</td>
              <td className="cell">{player.num_players}</td>
              <td className="cell">{player.platform}</td>
              <td className="cell">{player.mods}</td>
              <td className="cell">{player.invite_code}</td>
              <td className="cell">{player.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
