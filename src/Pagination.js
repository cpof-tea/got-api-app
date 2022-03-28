import './Pagination.css';

export default function Pagination(props) {
	const { pages, page, pageSize, onChange } = props;

	return pages ? (
		<div className="pagination">
			<span>
				{ page !== 1 ? (
						<button
							type="button"
							onClick={ () => onChange(1, pageSize) }
						>
							First page
						</button>
				) : null }
				{ page !== 1 ? (
						<button
							type="button"
							onClick={ () => onChange(page - 1, pageSize) }
						>
							Previous page
						</button>
				) : null }
				{ page !== pages ? (
						<button
							type="button"
							onClick={ () => onChange(page + 1, pageSize) }
						>
							Next page
						</button>
				) : null }
				{ page !== pages ? (
					<button
						type="button"
						onClick={ () => onChange(pages, pageSize) }
					>
						Last page
					</button>
				) : null }
			</span>
			<span>
				Page { page } of { pages }
			</span>
			<span>
				Items per page&nbsp;
				 <select
					onChange={ (event) => onChange(1, event.currentTarget.value) }
					defaultValue={ pageSize }
				>
					{ [10, 25, 50].map((value) => (
						<option key={ value } value={ value }>{ value }</option>
					)) }
				</select>
			</span>
		</div>
	) : null;
}

