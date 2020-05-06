import React, { useState } from 'react';
import './App.css';
import SampleData from './data.json';
import TableFilter from 'react-table-filter';
import usePlayer from '../src/hooks/usePlayer';
import {} from './styles.css';
import {} from './example.scss';

const App = (props) => {
  const [data, setData] = useState(SampleData.test.data);

  const { player } = usePlayer();

  let listOfPlayers = player.map((player) => {
    return [
      player.id,
      player.username,
      player.timezone,
      player.num_players,
      player.platform,
      player.mods,
      player.notes,
    ];
  });

  console.log('hit');
  console.log(listOfPlayers);

  // const [data, setData ] = useState({ firstName: 'daniel', lastName: 'vu' })
  // const [firstName, setFirstName] = useState('daniel');

  const setState = (anObject) => {
    if (anObject.hasOwnProperty('data')) {
      setData(anObject.data);
    } else {
      console.log('Not a valid state option');
    }
  };

  const _filterUpdated = (newData) => {
    setState({
      data: newData,
    });
  };

  const elementsHtml = data.map((item, index) => {
    return (
      <tr key={'row_' + index}>
        <td className="cell">{item.user}</td>
        <td className="cell">{item.status}</td>
        <td className="cell">{item.timezone}</td>
        <td className="cell">{item.playersneeded}</td>
        <td className="cell">{item.platform}</td>
        <td className="cell">{item.mods}</td>
        <td className="cell">{item.invitecode}</td>
        <td className="cell">{item.other}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="main_logo.png" className="App-logo" alt="logo" />
        <p>Stardew Valley Server Finder</p>
      </header>

      <table>
        <thread>
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
            <th key="status" filterkey="status" className="cell">
              Status
            </th>
            <th key="timezone" filterkey="timezone" className="cell">
              Timezone
            </th>
            <th key="playersneeded" filterkey="playersneeded" className="cell">
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
            <th>Invite Code</th>
            <th>Other</th>
          </TableFilter>
        </thread>
        <tbody>{elementsHtml}</tbody>
      </table>
    </div>
  );
};

export default App;
