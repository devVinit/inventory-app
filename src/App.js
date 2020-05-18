import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Responsive } from 'semantic-ui-react';
import IndexRouter from './pages/indexRouter';
import SidebarComponent from './components/Sidebar/SidebarComponent';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

	const isShowSideBar = useSelector(state => state.sideMenuBar.isShowSideNenuBar);

	return (
		<div className="App">
			<Router>
				<Responsive minWidth={768}>
					<Grid>
						<Grid.Column width={4} style={{ paddingBottom: 0 }}>
							<SidebarComponent />
						</Grid.Column>
						<Grid.Column stretched width={12}>
							<IndexRouter />
						</Grid.Column>
					</Grid>
				</Responsive>
				<Responsive maxWidth={768}>
					{
						isShowSideBar &&
						<div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
							<SidebarComponent />
						</div>
					}
					<IndexRouter />
				</Responsive>

			</Router>
		</div >
	);
}

export default App;
