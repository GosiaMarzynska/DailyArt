import './ArtInfo.css';

const ArtInfo: React.FC<{
	data: {
		imgSrc?: string;
		imgAlt?: string;
		author?: string;
		title?: string;
		type?: string;
		date?: number;
		origin?: string;
	};
	returnHandler: () => void;
}> = props => {
	const { imgSrc, imgAlt, author, title, type, date, origin } = props.data;

	let dateInfo: number | string | undefined;

	if (date) {
		if (date < 0) {
			dateInfo = Math.abs(date) + ' BC';
		} else dateInfo = date;
	}

	return (
		<div className='art-info-wrapper'>
			<img className='img' src={imgSrc} alt={imgAlt}></img>
			<div className='art-description'>
				<p className='art-title'>{title}</p>
				<p className='date'>{dateInfo}</p>
				<p className='author'>{author}</p>
				<p className='type'>{type}</p>
				<p className='origin'>{origin}</p>
			</div>
			<button onClick={props.returnHandler} className='returnBtn'>
				&lt;
			</button>
		</div>
	);
};

export default ArtInfo;
