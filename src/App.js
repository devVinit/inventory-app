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
			<Router basename={process.env.PUBLIC_URL}>
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
					<div style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, transition: 'all 0.3s ease-in-out', width: isShowSideBar ? '100%' : 0, overflow: 'hidden', }}>
						<SidebarComponent />
					</div>
					<IndexRouter />
				</Responsive>

			</Router>
		</div >
	);
}

export default App;
