import { useState } from 'react';
import Welcome from './Welcome';
import ArtInfo from './ArtInfo';

export default function Home() {
	const [isInitial, setIsInicial] = useState(true);
	const [artData, setArtData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const returnHandler = () => {
		setIsInicial(true);
	};

	function getErrorMessage(error: unknown) {
		if (error instanceof Error) return error.message;
		return String(error);
	}

	const clickHandler = async () => {
		setIsLoading(true);

		try {
			const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=100');

			if (!response.ok!) {
				throw new Error(`Error! status: ${response.status}`);
			}
			const data = await response.json();
			const dataInfo = data.data[Math.floor(Math.random() * 100)];
			setArtData({
				imgSrc: data.config['iiif_url'] + '/' + dataInfo['image_id'] + '/full/843,/0/default.jpg',
				imgAlt: dataInfo.thumbnail['alt_text'],
				author: dataInfo['artist_title'],
				title: dataInfo.title,
				type: dataInfo['artwork_type_title'],
				date: dataInfo['date_start'],
				origin: dataInfo['place_of_origin'],
			});

			setIsInicial(false);
			setIsLoading(false);

		} catch (error) {
			reportError({ message: getErrorMessage(error) });
		}
	};

	const artInfo = <ArtInfo data={artData } returnHandler={returnHandler} />;
	const homeContent = isInitial ? <Welcome clickHandler={clickHandler} isLoading={isLoading} /> : artInfo;

	return <div className='container'>{homeContent}</div>;
}
