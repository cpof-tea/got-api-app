import { useState, useEffect } from 'react';
import './CharactersFilter.css';

const GenderOptions = [
	{
		text: 'Any',
		value: '',
	},
	{
		text: 'Male',
		value: 'Male',
	},
	{
		text: 'Female',
		value: 'Female',
	},
];

export default function CharactersFilter(props) {
	const {
		onChange: triggerChange,
		gender: initialGender,
		culture: initialCulture,
	} = props;

	const [culture, setCulture] = useState(initialCulture);
	const [gender, setGender] = useState(initialGender);

	useEffect(() => {
		setGender(initialGender);
	}, [initialGender]);

	useEffect(() => {
		setCulture(initialCulture);
	}, [initialCulture]);

	return (
		<form
			className="filter"
			onSubmit={ (event) => {
				event.preventDefault();
				triggerChange({ culture, gender });
			}}
		>
			<input
				value={ culture || '' }
				placeholder="Culture"
				onChange={ (event) => setCulture(event.currentTarget.value) }
			/>

			<span>
				Gender:&nbsp;
				<select
					value={ gender || '' }
					onChange={ (event) => setGender(event.currentTarget.value) }
				>
					{ GenderOptions.map(({ text, value }) => (
						<option key={ value } value={ value }>{ text }</option>
					)) }
				</select>
			</span>

			<button type="submit">
				Submit
			</button>

			<button
				type="reset"
				onClick={ () => {
					setGender('');
					setCulture('');
					triggerChange({});
				}}
			>
				Reset
			</button>
		</form>
	);
}

