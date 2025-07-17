import ReviewsSlider from "./ReviewsSlider";
import { texts } from "../../../lib/texts";
import { IReviewBlog } from "../../../types/reviews-blog";

const Reviews = ({
  title,
  reviewsBlogList,
  isDescription,
  isTitle
}: {
  title: string;
  reviewsBlogList: IReviewBlog[];
  isDescription?: boolean;
  isTitle?:boolean;
}) => {
  return (
    <div className="pb-4 mil-mb130 overflow-hidden">
      <div className="container">
        <div className="row mil-jcc">
          <div className="col-lg-12 mil-tac">
            <p className="mil-stylized mil-m2 mil-mb60">{title}</p>
            {isDescription && (
              <h2 className="mil-head1 mil-mb90">
                {texts.homePage.reviews.h2.span1}
                <br />
                {texts.homePage.reviews.h2.span2}{" "}
                <span className="mil-a2">
                  {texts.homePage.reviews.h2.span3}
                </span>
                {texts.homePage.reviews.h2.span4}
              </h2>
            )}
          </div>
          <div className="col-lg-6 mil-relative">
            <ReviewsSlider reviewsBlogList={reviewsBlogList} isTitle={isTitle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
