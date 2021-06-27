import Article from './article.js';

const Articles = ({ articles, number }) => {
  let article_list = articles;
  if (number) {
    article_list = article_list.slice(0, number);
  }
  return (
    <div className="article-list">
      {article_list &&
        article_list.map((article, i) => {
          return <Article article={article} />;
        })}
    </div>
  );
};

export default Articles;
