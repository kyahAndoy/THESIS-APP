import { makeStyles } from '@mui/styles';


const useStyle = makeStyles({
    root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,   
  },

  paper: {
    width: '100%',
    height: 280,
    position: 'relative',
    left: 0,
    top: 280,
    backgroundColor: '#EEEEEE',
    marginTop:20,
    marginBottom:20,
  },

});

export default useStyle;