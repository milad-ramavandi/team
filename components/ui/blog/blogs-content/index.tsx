import { Suspense } from "react";
import SiderAndSlider from "../sider-and-slider";
import { texts } from "../../../../lib/texts";
import TabBar from "../tab-bar";
import SearchBar from "../search-bar";
import Skeleton from "../skeleton";
import BlogsListWrapper from "../blog-list-wrapper";
import Breadcrumb from "../../breadcrumb";

const BlogsContent = ({
  page,
  tag_id,
  search,
  category_id,
}: {
  page: number;
  tag_id: string;
  search: string;
  category_id: string;
}) => {
  return (
    <div className="d-flex flex-column align-items-center px-3 text-white blogs-content mil-mt180">
      <Breadcrumb/>
      <div className="heading-container">
        <h1 className="mil-display3 mil-mb40 w-100 text-center">
          {texts?.blogPage?.h1?.span1}{" "}
          <span className="mil-a1">{texts?.blogPage?.h1?.span2}</span>
          {texts?.blogPage?.h1?.span3}
          <span className="mil-a1">{texts?.blogPage?.h1?.span4}</span>{" "}
          {texts?.blogPage?.h1?.span5}{" "}
          <span className="mil-a1">{texts?.blogPage?.h1?.span6}</span>
        </h1>
      </div>
      <SiderAndSlider />
      <div className="w-100 d-flex flex-column p-2 top" id="tab_search_bar">
        <TabBar />
        <SearchBar searchValue={search} />
      </div>

      <div className="w-100 px-2 px-lg-0">
        <Suspense
          key={`${page}-${search}-${tag_id}-${category_id}`}
          fallback={<Skeleton />}
        >
          <BlogsListWrapper
            page={page}
            search={search}
            tag_id={tag_id}
            categoryId={category_id}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogsContent;
