export const HOSTNAME = 'https://anapioficeandfire.com';

/**
 *
 * @param {string} header
 * @returns {Record<string, number>}
 */
function getPages(header) {
	return header.split(', ').reduce((pages, item) => {
		const [, link, type] = item.match(/<(.+)>; rel="(\w+)"/);

		pages[type] = Number.parseInt(new URL(link).searchParams.get('page'), 10);

		return pages;
	}, {});
}

/**
 * @template T
 * @callback Fetcher
 * @param {string} url
 * @return {Promise<{ data: T, pages?: number }>}
 */

/** @type {Fetcher<any>} */
export default async function fetcher(url, ...args) {
	return fetch(`${HOSTNAME}${url}`, ...args).then(async (res) => {
		const data = {};

		if (res.headers.has('Link')) {
			const links = getPages(res.headers.get('Link'));

			if ('last' in links)
				data.pages = links.last;
		}

		data.data = await res.json();

		return data;
	});
}

