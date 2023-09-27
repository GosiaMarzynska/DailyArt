import './Welcome.css';
import React from 'react';

const Welcome: React.FC<{ clickHandler: () => void, isLoading: boolean }> = props => {
	return (
		<div className='welcome-card'>
			<h1 className='title'>Daily Art</h1>
			<p className='title-text'>Draw art for today!</p>
			<button onClick={props.clickHandler} className='drawBtn'>
				draw
			</button>
            {props.isLoading && <p className='loading'>loading...</p>}
		</div>
	);
};

export default Welcome;
