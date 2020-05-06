import React, { Component } from 'react';
import './App.css';
import SampleData from './data.json';
import TableFilter from 'react-table-filter';
import {} from './styles.css';
import {} from './example.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: SampleData.test.data,
    };
    this._filterUpdated = this._filterUpdated.bind(this);
  }

  _filterUpdated(newData, filtersObject) {
    this.setState({
      data: newData,
    });
  }

  render() {
    const data = this.state.data;
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
            <TableFilter rows={data} onFilterUpdate={this._filterUpdated}>
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
              <th
                key="playersneeded"
                filterkey="playersneeded"
                className="cell"
              >
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
  }
}

export default App;
