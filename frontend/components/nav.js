import Footer from '../components/footer.js';
import CategoryList from '../components/categoryList.js';
import Title from '../components/title.js';
import Link from 'next/link';

const Nav = ({ categories, children }) => {
  return (
    <div className="nav">
      <Link href="/">
        <h1> Tres Sims </h1>
      </Link>
      <br />
      {categories && (
        <>
          Filter by category
          <hr />
          <CategoryList categories={categories} />
        </>
      )}

      {children}
    </div>
  );
};

export default Nav;
