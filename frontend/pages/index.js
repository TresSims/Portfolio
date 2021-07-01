import Articles from '../components/article-list.js';
import Nav from '../components/nav.js';
import Layout from '../components/layout.js';
import { fetchAPI } from '../lib/api.js';

const Home = ({ articles, categories }) => {
  const recent_articles = articles.reverse();
  return (
    <>
      <Layout>
        <Nav categories={categories} />
        <div className="content">
          <Articles articles={recent_articles} />
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const articles = await fetchAPI('/projects');
  const categories = await fetchAPI('/categories');
  return {
    props: { articles, categories },
  };
}
export default Home;
