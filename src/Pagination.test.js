import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

test('pagination render', async () => {
	const { asFragment, rerender } = render(
		<Pagination
			page={ 1 }
			pageSize={ 25 }
			pages={ 3 }
		/>
	);

	expect(asFragment()).toMatchSnapshot();

	rerender(
		<Pagination
			page={ 3 }
			pageSize={ 10 }
			pages={ 3 }
		/>
	);

	expect(asFragment()).toMatchSnapshot();

	rerender(
		<Pagination
			page={ 2 }
			pageSize={ 50 }
			pages={ 3 }
		/>
	);

	expect(asFragment()).toMatchSnapshot();

	rerender(
		<Pagination
			page={ 1 }
			pageSize={ 10 }
			pages={ 1 }
		/>
	);

	expect(asFragment()).toMatchSnapshot();
});

