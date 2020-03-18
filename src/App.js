import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableFilter from 'tablefilter';

function App() {
  // var tf = new TableFilter(document.querySelector('.my-table'), {
  //   base_path: 'path/to/my/scripts/tablefilter/',
  // });
  // tf.init();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Stardew Valley Server Finder</p>
      </header>
      <body>
        <table className="my-table">
          <tr>
            <th>User</th>
            <th>Status</th>
            <th>Timezone</th>
            <th>Players Needed</th>
            <th>Platform</th>
            <th>Mods</th>
            <th>Invite Code</th>
            <th>Other</th>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>3</td>
            <td>XBox</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +6</td>
            <td>3</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>2</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>3</td>
            <td>PC or Switch</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT+8</td>
            <td>2</td>
            <td>XBox</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>2</td>
            <td>Switch</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +8</td>
            <td>1</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +6</td>
            <td>3</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>2</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
          <tr>
            <td>CompSciLauren</td>
            <td>Hosting</td>
            <td>GMT +4</td>
            <td>1</td>
            <td>PC</td>
            <td>None</td>
            <td>DM me</td>
            <td>
              I can vc, I have experience and speak fluent english. Active
              daily. Timezone must be close to mine. I'd love to join people who
              are active and can vc, thanks.
            </td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
