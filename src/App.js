import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import General from './General';
import Right_feed from './Right_feed';

function App() {
	return (
		<div className='app'>
			<Header />
			<div className='app_panel'>
				<Sidebar />
				<General />
				<Right_feed />
			</div>
		</div>
	);
}

export default App;
