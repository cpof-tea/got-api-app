import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router, useSearchParams } from 'react-router-dom';

const LocationRender = () => {
	const [searchParams, ] = useSearchParams();

	return (
		<span>{ searchParams.toString('page') }</span>
	);
}

const withRouter = (Component) => (
	<Router>
		{ Component }
	</Router>
);

test('app render', async () => {
	const { rerender } = render(<App />);

	// Navigate to next page
	const nextPageButton = await screen.findByRole('button', { name: /next page/i });

	fireEvent.click(nextPageButton);

	await screen.findByText(/page 2 of /i);
	await screen.findByText(/previous page/i);

	// Check if app respects location on rerender
	rerender(<App />);

	await screen.findByText(/previous page/i);

	// Check location
	rerender(withRouter(<LocationRender />));

	await screen.findByText('page=2&pageSize=25');
});

