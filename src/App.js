import React, { useState } from 'react';
import './App.css';
import SampleData from './data.json';
import TableFilter from 'react-table-filter';
import usePlayer from '../src/hooks/usePlayer';
import usePlayerStatus from '../src/hooks/usePlayerStatus';
import {} from './styles.css';
import {} from './example.scss';

const App = (props) => {
  const [data, setData] = useState(SampleData.test.data);

  const { player } = usePlayer();
  const { playerStatus } = usePlayerStatus();

  let listOfPlayerDataToDisplay = [];
  for (let i = 0; i < player.length; i++) {
    for (let j = 0; j < playerStatus.length; j++) {
      if (player[i].id == playerStatus[j].player_id) {
        listOfPlayerDataToDisplay.push([player[i], playerStatus[j]]);
      }
    }
  }

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

  const elementsHtml = listOfPlayerDataToDisplay.map((player) => {
    return (
      <tr key={player.id}>
        <td className="cell">{player[0].username}</td>
        <td className="cell">{player[1].status_id}</td>
        <td className="cell">{player[0].timezone}</td>
        <td className="cell">{player[0].num_players}</td>
        <td className="cell">{player[0].platform}</td>
        <td className="cell">{player[0].mods}</td>
        <td className="cell">{player[0].invite_code}</td>
        <td className="cell">{player[0].notes}</td>
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
