import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom'
import useCharacters from './hooks/useCharacters';
import CharactersFilter from './CharactersFilter';
import Pagination from './Pagination';
import CharactersTable from './CharactersTable';
import { toNumber } from './utils';
import Loader from './Loader';

export default function Characters() {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1, pageSize: 25 });

	const { characters, pages, mutate, isLoading, isError } = useCharacters(searchParams);
	const page = toNumber(searchParams.get('page'));
	const pageSize = toNumber(searchParams.get('pageSize'));

	const handleFilterUpdates = useCallback(({ culture, gender }) => {
		const newSearchParams = new URLSearchParams(searchParams);

		if (culture)
			newSearchParams.set('culture', culture);
		else
			newSearchParams.delete('culture');

		if (gender)
			newSearchParams.set('gender', gender);
		else
			newSearchParams.delete('gender');

		newSearchParams.set('page', 1);

		setSearchParams(newSearchParams);
	}, [searchParams, setSearchParams]);

	const handlePaginationUpdates = useCallback((page, pageSize) => {
		const newSearchParams = new URLSearchParams(searchParams);

		newSearchParams.set('page', page);
		newSearchParams.set('pageSize', pageSize);

		setSearchParams(newSearchParams);
	}, [searchParams, setSearchParams]);

	return (
		<div>
			<h1>Table of Characters</h1>
			<CharactersFilter
				gender={ searchParams.get('gender') }
				culture={ searchParams.get('culture') }
				onChange={ handleFilterUpdates }
			/>
			{ characters ? (
				<CharactersTable
					characters={ characters }
				/>
			) : null }
			{ isLoading ? (
				<Loader name="characters" />
			) : null }
			{ isError ? (
				<div>
					Something went wrong&nbsp;
					<button type="button" onClick={ () => mutate() }>
						Try again
					</button>
				</div>
			) : null }
			<Pagination
				page={ page }
				pageSize={ pageSize }
				pages={ pages }
				onChange={ handlePaginationUpdates }
			/>
		</div>
	);
}

