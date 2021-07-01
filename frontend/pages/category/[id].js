import { useRouter } from 'next/router';
import Articles from '../../components/article-list.js';
import Nav from '../../components/nav.js';
import Layout from '../../components/layout.js';
import { fetchAPI } from '../../lib/api.js';

const Category = ({ categories, category }) => {
  return (
    <>
      <Layout>
        <Nav categories={categories} />
        <div className="content">
          <Articles articles={category.projects} />
        </div>
      </Layout>
    </>
  );
};

export default Category;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const category = (await fetchAPI(`/categories?id=${id}`))[0];
  const categories = await fetchAPI('/categories');
  return {
    props: { categories, category },
  };
}
