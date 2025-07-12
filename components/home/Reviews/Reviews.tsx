import ReviewsSlider from "./ReviewsSlider";

const Reviews = ({title}:{title:string}) => {
  return (
    <div id="reviews">
      <div className="container">
        <div className="row mil-jcc">
          <div className="col-lg-12 mil-tac">
            <p className="mil-stylized mil-m2 mil-mb60 mil-up">{title}</p>
            <h2 className="mil-head1 mil-mb90 mil-up">
              Customer Voices: <br />
              Hear What <span className="mil-a2">They Say</span>!
            </h2>
          </div>
          <div className="col-lg-6 mil-relative">
            <ReviewsSlider/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
