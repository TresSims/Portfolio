import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Article = ({ article }) => {
  return (
    <Card id={article.id}>
      <CardMedia image="" />
      <CardContent>
        <Typography variant="h5" component="h2">
          {article.name}
        </Typography>
        <Typography variant="body2" component="p">
          {article.short}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Article;
