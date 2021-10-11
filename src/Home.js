import React from 'react'
import ButtonHolder from './components/ButtonHolder';
import useStyles from './components/componentStyles/ComponentsStyle';
import ReactPlayer from 'react-player'


function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1>Home Page</h1>
      <ReactPlayer
        width='100%'
        height='212px'
        url='https://youtu.be/dNCWe_6HAM8'
        controls={true}
        playing={true}
        light={true}
        aspectratio= '4:3'
        className={classes.video}
        />
      <ButtonHolder className={classes.btnHolder}/>
    </div>
  )
} 

export default Home;


