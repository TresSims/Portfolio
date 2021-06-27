import { getMediaURL } from '../lib/api.js';
import CategoryList from './categoryList.js';
import Link from 'next/link';
import { fetchAPI } from '../lib/api.js';

const Article = ({ article }) => {
  const thumb = getMediaURL(article.thumb.url);

  console.log(article);
  return (
    <Link href={`/article/${encodeURIComponent(article.id)}`}>
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${thumb})`,
        }}
      >
        <div>
          <h3>> {article.name}</h3>
          <font>{article.blurb}</font>
          {article.categories && <CategoryList categories={article.categories} />}
        </div>
      </div>
    </Link>
  );
};

export default Article;
