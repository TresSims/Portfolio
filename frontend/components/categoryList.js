import ClipButton from './clipButton.js';
import Link from 'next/link';

const CategoryList = ({ categories }) => {
  console.log(categories);
  let cats = categories;
  return (
    <div className="categories">
      {cats.map((category, i) => {
        return (
          <>
            <Link href={`/category/${category.id}`}>{category.name}</Link>
            {i < cats.length - 1 && <span>&ensp;-&ensp;</span>}
          </>
        );
      })}
    </div>
  );
};

export default CategoryList;
