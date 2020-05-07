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

// const App = (props) => {
//   const { player } = usePlayer();
//   const { playerStatus } = usePlayerStatus();

//   let listOfPlayerDataToDisplay = [];
//   for (let i = 0; i < player.length; i++) {
//     for (let j = 0; j < playerStatus.length; j++) {
//       if (player[i].id === playerStatus[j].player_id) {
//         listOfPlayerDataToDisplay.push([player[i], playerStatus[j]]);
//         if (listOfPlayerDataToDisplay[i][1].status_id === 1) {
//           listOfPlayerDataToDisplay[i][1].status_id = 'Hosting';
//         } else {
//           listOfPlayerDataToDisplay[i][1].status_id = 'Joining';
//         }

//         if (listOfPlayerDataToDisplay[i][0].mods === '') {
//           listOfPlayerDataToDisplay[i][0].mods = 'None';
//         }

//         if (listOfPlayerDataToDisplay[i][0].platform === 1) {
//           listOfPlayerDataToDisplay[i][0].platform = 'PC';
//         } else if (listOfPlayerDataToDisplay[i][0].platform === 2) {
//           listOfPlayerDataToDisplay[i][0].platform = 'Switch';
//         } else if (listOfPlayerDataToDisplay[i][0].platform === 3) {
//           listOfPlayerDataToDisplay[i][0].platform = 'Xbox';
//         } else {
//           listOfPlayerDataToDisplay[i][0].platform = 'PS4';
//         }
//       }
//     }
//   }

//   const theData = {
//     data: [],
//   };

//   theData.data.push({
//     user: 'Todd',
//     status_id: 'Hosting',
//     timezone: 'GMT+1',
//     num_players: 3,
//     platform: 'PC',
//     mods: 'None',
//     invitecode: 'DM me',
//     notes: 'notes here random notes here',
//   });

//   theData.data.push({
//     user: 'Jimmy',
//     status_id: 'Joining',
//     timezone: 'EST',
//     num_players: 4,
//     platform: 'Xbox',
//     mods: 'None',
//     invitecode: 'DM me',
//     notes: 'these are my notes',
//   });

//   if (listOfPlayerDataToDisplay[5] != null) {
//     for (let i = 0; i < 8; i++) {
//       theData.data.push({
//         user: listOfPlayerDataToDisplay[i][0].username,
//         status_id: listOfPlayerDataToDisplay[i][1].status_id,
//         timezone: listOfPlayerDataToDisplay[i][0].timezone,
//         num_players: listOfPlayerDataToDisplay[i][0].num_players,
//         platform: listOfPlayerDataToDisplay[i][0].platform,
//         mods: listOfPlayerDataToDisplay[i][0].mods,
//         invitecode: 'DM me',
//         notes: listOfPlayerDataToDisplay[i][0].notes,
//       });
//     }
//   }

//   const [data, setData] = useState(theData.data); // SampleData.test.data

//   console.log('data:\n', data);
//   console.log('listOfPlayerDataToDisplay:', listOfPlayerDataToDisplay);
//   // const [data, setData ] = useState({ firstName: 'daniel', lastName: 'vu' })
//   // const [firstName, setFirstName] = useState('daniel');

//   const setState = (anObject) => {
//     if (anObject.hasOwnProperty('data')) {
//       setData(anObject.data);
//     } else {
//       console.log('Not a valid state option');
//     }
//   };

//   const _filterUpdated = (newData) => {
//     setState({
//       data: newData,
//     });
//   };

//   const elementsHtml = listOfPlayerDataToDisplay.map((player) => {
//     return (
//       <tr key={player.id}>
//         <td className="cell">{player[0].username}</td>
//         <td className="cell">{player[1].status_id}</td>
//         <td className="cell">{player[0].timezone}</td>
//         <td className="cell">{player[0].num_players}</td>
//         <td className="cell">{player[0].platform}</td>
//         <td className="cell">{player[0].mods}</td>
//         <td className="cell">{player[0].invite_code}</td>
//         <td className="cell">{player[0].notes}</td>
//       </tr>
//     );
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="main_logo.png" className="App-logo" alt="logo" />
//         <p>Stardew Valley Server Finder</p>
//       </header>

//       <table>
//         <thead>
//           <TableFilter rows={data} onFilterUpdate={_filterUpdated}>
//             <th
//               key="user"
//               filterkey="user"
//               className="cell"
//               casesensitive={'true'}
//               showsearch={'true'}
//             >
//               User
//             </th>
//             <th key="status_id" filterkey="status_id" className="cell">
//               Status
//             </th>
//             <th key="timezone" filterkey="timezone" className="cell">
//               Timezone
//             </th>
//             <th key="num_players" filterkey="num_players" className="cell">
//               Players Needed
//             </th>
//             <th key="platform" filterkey="platform" className="cell">
//               Platform
//             </th>
//             <th
//               key="mods"
//               filterkey="mods"
//               className="cell"
//               casesensitive={'true'}
//               showsearch={'true'}
//             >
//               Mods
//             </th>
//             <th>Invite Code</th>
//             <th>Notes</th>
//           </TableFilter>
//         </thead>
//         <tbody>{elementsHtml}</tbody>
//       </table>
//     </div>
//   );
// };

// export default App;
