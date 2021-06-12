import Article from './article.js';
import Grid from '@material-ui/core/Grid';

const Articles = ({ articles, error, number }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  let article_list = articles;

  if (number) {
    article_list = articles.slice(0, number);
  }
  return (
    <Grid container spacing={2}>
      {article_list.map((article, i) => {
        return <Article article={article} />;
      })}
      ;
    </Grid>
  );
};

export async function getStaticProps({ params }) {
  try {
    const art = await axios.get(`http://backend:1337/${params.slug}`);
    const articls = art.data;
    return { articles };
  } catch (error) {
    return { error };
  }
}

export default Articles;
