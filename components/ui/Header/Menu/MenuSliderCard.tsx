import { IBlog } from "../../../../types/blog";
const MenuSliderCard = ({imageUrl, title}:IBlog) => {
  return (
    <a className="mil-blog-card-sm mil-c-gone">
      <div className="mil-cover">
        <div className="mil-hover-frame">
          <img src={imageUrl} alt="cover" />
        </div>
      </div>
      <div className="mil-text-frame">
        <h4 className="mil-head6 mil-max-1row-text slider-text">
          {title}
        </h4>
      </div>
    </a>
  );
};

export default MenuSliderCard;
