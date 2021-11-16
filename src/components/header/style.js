import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  root: {
    position: 'fixed',
    zIndex: '9999',
    padding: '0 2.5%',
    backgroundColor: 'rgb(15, 27, 39)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgb(29, 47, 65)',
    '& > div:first-child': {
      display: 'flex',
      alignItems: 'stretch',
      margin: '20px 0',
      '& > a': {
        margin: '0',
        maxHeight: '40px',
        '& > img': {
          margin: '0',
        },
        [theme.breakpoints.down('1280')]: {
          display: 'none',
        },
      },
      '& > button': {
        display: 'none',
        fontSize: '20px',
        padding: '0',
        color: 'rgb(113, 146, 176)',
        minHeight: '40px',
        [theme.breakpoints.down('1280')]: {
          display: 'block',
        },
        '& > span:first-child': {
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase',
      color: 'rgb(113, 146, 176)',
      textDecoration: 'none',
      padding: '0 10px',
      fontSize: '12px',
      lineHeight: '20px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      minHeight: '40px',
      maxHeight: '40px',
      '& > svg': {
        marginLeft: '5px',
      },
      '&:hover': {
        color: 'white',
        textDecoration: 'none',
      },
    },
  },
  linkPanel: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    width: '90%',
  },
  titlePanel: {
    display: 'none',
    [theme.breakpoints.down('1280')]: {
      display: 'flex',
      alignItems: 'center',
      '& > h3': {
        margin: '0',
        marginLeft: '8px',
        fontSize: '18px',
        lineHeight: '1.2',
        fontWeight: '700',
        color: 'rgb(246, 246, 246)'
      },
    },
  },
});

export default styles;