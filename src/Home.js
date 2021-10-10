import React from 'react'
import ButtonHolder from './components/ButtonHolder';
import useStyles from './components/componentStyles/ComponentsStyle';



function Home() {
  const classes = useStyles();
  return (
    <div>
      <ButtonHolder className={classes.btnHolder}/>
    </div>
  )
}

export default Home;


