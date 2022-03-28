import { Link } from 'react-router-dom';
import * as characterHelpers from './helpers/characterHelpers';
import './CharactersTable.css';

const Columns = [
	{
		name: 'Character',
		render: (character) => characterHelpers.getName(character),
	},
	{
		name: 'Alive',
		render: (character) => characterHelpers.getAliveStatus(character),
	},
	{
		name: 'Gender',
		render: (character) => character.gender,
	},
	{
		name: 'Culture',
		render: (character) => character.culture || 'Unknown',
	},
	{
		name: 'Allegiances',
		render: (character) => characterHelpers.getAllegiances(character)
			.map((allegiance, index, array) => (
				<span key={ allegiance }>
					<Link to={ `/${allegiance}` }>{ allegiance }</Link>&nbsp;
				</span>
			)),
	},
];

export default function CharactersTable({  characters }) {
	return (
		<table className="table">
			<thead>
				<tr>
					{ Columns.map((column) => (
						<th key={ column.name }>{ column.name }</th>
					)) }
				</tr>
			</thead>
			<tbody>
				{ !characters ? (
					<tr>
						<td colSpan={ Columns.length }>No data</td>
					</tr>
				) : null }
				{ characters?.map(character => (
					<tr key={ character.url }>
						{ Columns.map((column) => (
							<td key={ column.name }>{ column.render(character) }</td>
						)) }
					</tr>
				)) }
			</tbody>
		</table>
	);
}

