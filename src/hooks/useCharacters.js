import useSWR from 'swr';
import fetcher from './fetcher';

/** @typedef {Awaited<ReturnType<import('./fetcher').Fetcher<import('../helpers/characterHelpers').Character>>>} CharacterFetcherData */

/**
 *
 * @param {URLSearchParams|object} params
 * @returns
 */
export default function useCharacters(params) {
	if (!(params instanceof URLSearchParams))
		params = new URLSearchParams(params);

	/** @type {import('swr').SWRResponse<CharacterFetcherData>} */
	const { data, error, mutate } = useSWR(`/api/characters/?${params.toString()}`, fetcher);

	return {
		characters: data?.data,
		pages: data?.pages,
		isLoading: !error && !data?.data,
		isError: error,
		mutate,
	};
}

