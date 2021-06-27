import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bgb: props => ({
    backgroundColor: props.color,
    width: props.width,
    height: props.height,
  }),
  fgb: props => ({
    color: props.color,
    '&:hover': {
      color: '#fff',
      backgroundColor: props.color,
      cursor: 'pointer',
    },
  }),
});

const ClipButton = ({ color = '#F00', label, width = 'auto', height = 'auto' }) => {
  const props = { color: `${color}`, width: `${width}`, height: `${height}` };
  const classes = useStyles(props);

  return (
    <div className="clipBackground" className={`${classes.bgb} clipBackground`}>
      <div className="clipForeground" className={`${classes.fgb} clipForeground`}>
        {label}
      </div>
    </div>
  );
};

export default ClipButton;
