import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  column: { flexDirection: 'column' },
  main: {
    flex: 1,
    overflow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#ffffff',
  },
  red: {
    backgroundColor: '#ff2040',
    color: '#ffffff',
  },
  green: {
    backgroundColor: '#00b020',
  },
  largeLogo: {
    height: 100,
  },
}));
