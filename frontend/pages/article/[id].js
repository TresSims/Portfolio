import { useRouter } from 'next/router';
import Nav from '../../components/nav.js';
import Layout from '../../components/layout.js';
import { fetchAPI } from '../../lib/api.js';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const Article = ({ articles, article }) => {
  console.log(article);

  let date = article.updated_at;
  date = date.split('T')[0];

  let prev = article.id > 1;
  let prevArticle = article.id - 1;
  let next = article.id != articles.length;
  let nextArticle = article.id + 1;
  return (
    <>
      <Layout>
        <Nav>
          <h2>{article.name}</h2>
          <p className="articleDate">{date}</p>
          <p className="articleBlurb">{article.blurb}</p>
          <div className="articlePagination">
            {prev ? (
              <Link href={`/article/${encodeURIComponent(prevArticle)}`}>Previous</Link>
            ) : (
              <div></div>
            )}
            {next ? (
              <Link href={`/article/${encodeURIComponent(nextArticle)}`}>Next</Link>
            ) : (
              <div></div>
            )}
          </div>
        </Nav>
        <div className="content">
          <div className="article">
            <ReactMarkdown escapeHtml={false}>{article.description}</ReactMarkdown>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Article;

export async function getServerSideProps(context) {
    const { id } = context.query;
    const article = (await fetchAPI(`/projects?id=${id}`))[0];
    const articles = await fetchAPI('/projects');
  return {
    props: { articles, article },
  };
}
