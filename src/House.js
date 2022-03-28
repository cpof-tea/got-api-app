import useHouse from './hooks/useHouse';
import * as houseHelpers from './helpers/houseHelpers';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';

const Fields = [
	{
		title: 'Name of the House',
		render: (house) => house?.name,
	},
	{
		title: 'Region',
		render: (house) => house?.region,
	},
	{
		title: 'Coat of Arms',
		render: (house) => house?.coatOfArms,
	},
	{
		title: 'Words',
		render: (house) => house?.words,
	},
	{
		title: 'Titles',
		render: houseHelpers.getTitles,
	},
	{
		title: 'Seats',
		render: houseHelpers.getSeats,
	},
	{
		title: 'Has died out',
		render: houseHelpers.hasDiedOut,
	},
	{
		title: 'Has overlord',
		render: houseHelpers.hasOverlord,
	},
	{
		title: 'Number of Cadet Branches',
		render: houseHelpers.countCadetBranches,
	},
];

export default function House() {
	const { house: id } = useParams();
	const navigate = useNavigate();
	const { house, mutate, isLoading, isError } = useHouse(id);

	return (
		<div>
			<button onClick={ () => navigate(-1) }>Back</button>
			<h1>House Details</h1>
			{ house ? (
				<dl>
					{ Fields.map((field) => (
						<div key={ field.title }>
							<dt>{ field.title }</dt>
							<dd>{ field.render(house) || '-' }</dd>
						</div>
					)) }
				</dl>
			) : null }
			{ isLoading ? (
				<Loader name="house" />
			) : null }
			{ isError ? (
				<div>
					Something went wrong&nbsp;
					<button onClick={ () => mutate() }>
						Try again
					</button>
				</div>
			) : null }
		</div>
	);
}

