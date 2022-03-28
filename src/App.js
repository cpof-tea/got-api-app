import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Characters from './Characters';
import House from './House';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={ <Characters /> } />
				<Route path=":house" element={ <House /> } />
				<Route path="*" element={ <Navigate replace to="/" /> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
