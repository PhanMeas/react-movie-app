import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table style= {{
        backgroundColor: '#000',
        display: 'block',
        color: '#fff',
      }}>
        <tbody>
          <tr>
            <td>
              <img src="movie_finder.png"/>
            </td>
            <td width="8"/>
            <td>
              <h3> Greatest Movie Finder</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
