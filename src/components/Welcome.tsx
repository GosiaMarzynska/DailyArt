import './Welcome.css'

export default function Welcome(){

    return(
        <div className='welcome-card'>
            <h1 className='title'>Daily Art</h1>
            <p className='title-text'>Draw art for today!</p>
            <button className='drawBtn'>draw</button>
        </div>
    )
}