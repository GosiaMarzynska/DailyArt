import { useState } from 'react';
import Welcome from './Welcome';

export default function Home() {
	const [isInitial, setIsInicial] = useState(true);

	const artPresentation = <div></div>;
	const homeContent = isInitial ? <Welcome /> : artPresentation;

	return <div className='container'>{homeContent}</div>;
}
