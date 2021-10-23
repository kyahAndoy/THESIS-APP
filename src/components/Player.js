import ReactPlayer from 'react-player';

const Player = () => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            width='100%'
            height='100%'
            url='https://youtu.be/dNCWe_6HAM8'
            controls={true}
            playing={true}
            light={true}
                aspectratio='4:3'
                className='react-player'
            />
        </div>  
    )
}

export default Player;