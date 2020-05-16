import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Menu, Segment } from 'semantic-ui-react';
import IndexRouter from './pages/indexRouter';
import SidebarComponent from './components/Sidebar/SidebarComponent';
import './App.css';

function App() {
  return (
    <div className="App">

      <Grid>
        <Grid.Column width={4}>
          <SidebarComponent />
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Router>
            <IndexRouter />
          </Router>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
