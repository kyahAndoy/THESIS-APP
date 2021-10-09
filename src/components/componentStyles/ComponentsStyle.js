import { makeStyles } from '@mui/styles';
import { flexbox } from '@mui/system';

const useStyle = makeStyles({
    root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    borderTop: '#78909C',
  },

  paper: {
    display: 'flex',
    width: '90%',
    height: '40%',
    position: 'absolute',
    bottom: 80,
    margin: 1,
  },
});

export default useStyle;