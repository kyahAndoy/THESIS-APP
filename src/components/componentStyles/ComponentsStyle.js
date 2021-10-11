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
    backgroundColor: '#EEEEEE',
    marginTop:20,
    
  },

  video: {
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    paddingBottom: 50,
    marginBottom: 20,
    paddingTop: 20,
    
  },

});

export default useStyle;