import { ICounter } from "../../../../types/about";

const Counter = ({ title, number }: ICounter) => {
  return (
    <div className="col-md-4 col-lg-12">
      <div className="mil-counter-item mil-mb30 mil-768-mb60">
        <h4 className="mil-offset-number">
          {number}<span className="mil-a2">+</span>
        </h4>
        <div className="mil-counter-text">
          <h5 className="mil-head4 mil-m1">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
