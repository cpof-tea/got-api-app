import useSWR from 'swr';
import fetcher from './fetcher';

/** @typedef {Awaited<ReturnType<import('./fetcher').Fetcher<import('../helpers/houseHelpers').House>>>} HouseFetcherData */

export default function useHouse(id) {
	/** @type {import('swr').SWRResponse<HouseFetcherData>} */
	const { data, error, mutate } = useSWR(id ? `/api/houses/${id}` : null, fetcher);

	return {
		house: data?.data,
		isLoading: !error && !data?.data,
		isError: error,
		mutate,
	};
}

