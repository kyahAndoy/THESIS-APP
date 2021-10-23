import React from 'react';
import Paper from '@mui/material/Paper';
import useStyles from './componentStyles/ComponentsStyle';



const ButtonHolder = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper
                variant="outlined"
                elevation={0}
                className={classes.paper}
                sx={{borderRadius: 3}}
            ></Paper>
        </div>  
    )
}

export default ButtonHolder;
