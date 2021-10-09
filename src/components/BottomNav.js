import React from 'react'
import useStyles from './componentStyles/ComponentsStyle';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import VideocamIcon from '@mui/icons-material/Videocam';
import PanoramaIcon from '@mui/icons-material/Panorama';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


function BottomNav() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    return (
        <>
            <BottomNavigation
                  className={classes.root}
                value={value}
                onChange={(event, newValue) => {
                     setValue(newValue);
                }}
                showLabels
              >
            
                <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link}
        to="/"/>
                <BottomNavigationAction label="Videos" icon={<VideocamIcon />} component={Link}
        to="/videos"/>
                <BottomNavigationAction label="Images" icon={<PanoramaIcon />} component={Link}
        to="/images"/>
                <BottomNavigationAction label="Downloads" icon={<FolderIcon />} component={Link}
        to="/downloads"/>
            </BottomNavigation>
        </>
    )
}

export default BottomNav;
