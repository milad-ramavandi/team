import Link from "next/link";
import { ICategory } from "../../../../types/blog";
import ChevronRightIcon from "../../svg/chevron-right";

const CategoriesList = async ({
  categoriesList,
}: {
  categoriesList: ICategory[];
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/blog?paged=1`);
  const blogListData = await res.json();

  return (
    <div className="categories-box">
      <span className="categories-title">All Category</span>
      <hr className="categories-separator" />
      <div className="categories-list">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <ChevronRightIcon isChevronRight color="#7c3980" isCategory/>
            <Link href="/blog" scroll={false} className="category-link">
              All
            </Link>
          </div>
          <span className="category-count">
            ({blogListData?.pagination?.total_posts})
          </span>
        </div>

        {categoriesList
          ?.filter((item) => item?.id !== 1)
          .map((category) => (
            <div key={category.id} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <ChevronRightIcon isChevronRight  color="#7c3980" isCategory/>
                <Link
                  href={{
                    pathname: "/blog",
                    query: { category_id: category?.id },
                  }}
                  scroll={false}
                  className="category-link"
                >
                  {category?.name}
                </Link>
              </div>
              <span className="category-count">({category?.count})</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoriesList;
