import { createStyles } from '@material-ui/styles';
import theme from '../../theme';

const styles = createStyles({
  list: {
    position: 'relative',
    padding: '90px 40px',
    height: '100vh',
    '& > button': {
      margin: '0 10px',
    },
    '& > button:first-child': {
      float: 'right',
    },
    '& table svg': {
      cursor: 'pointer',
    },
    '& > a': {
      display: 'inline-flex',
      padding: '5px 15px',
      color: '#556cd6',
      border: '1px solid rgba(85, 108, 214, 0.5)',
      fontSize: '0.875rem',
      minWidth: '64px',
      fontWeight: '500',
      lineHeight: '1.75',
      borderRadius: '4px',
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      '&:hover': {
        border: '1px solid #556cd6',
        background: 'rgba(85, 108, 214, 0.04)',
      },
    },
    '& > .MuiTableContainer-root': {
      margin: '20px 0',
      maxHeight: 'calc(100vh - 250px)',
    },
  },
  btn_group: {
    margin: '20px 0',
  },
  detail: {
    position: 'relative',
    padding: '90px 40px',
    height: '100vh',
  },
});

export default styles;