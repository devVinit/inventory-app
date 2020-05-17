import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import IndexRouter from './pages/indexRouter';
import SidebarComponent from './components/Sidebar/SidebarComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Grid>
          <Grid.Column width={4} style={{ paddingBottom: 0 }}>
            <SidebarComponent />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <IndexRouter />
          </Grid.Column>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
