import React from 'react'
import ButtonHolder from './components/ButtonHolder';
import useStyles from './components/componentStyles/ComponentsStyle';
import Player from './components/Player';
import { borders } from '@mui/system';

function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1>Home Page</h1>
      <Player/>
      <ButtonHolder />
    </div>
  )
} 

export default Home;


