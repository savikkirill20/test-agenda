import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#101219',
    color: 'white',
    padding: '0',
  },
  info: {
    padding: '20px 50px',
    borderTop: '1px solid rgb(70, 70, 70)',
    '& > p': {
      margin: '0',
      lineHeight: '40px',
    },
    [theme.breakpoints.down('768')]: {
      textAlign: 'center',
    },
  }
});

export default styles;