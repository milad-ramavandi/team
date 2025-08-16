import { ICounter } from "../../../../types/counter";

const Counter = ({ number, title }: ICounter) => {
  return (
    <div className="col-lg-4">
      <div className="mil-counter-item mil-stl mil-mb30 mil-768-mb60">
        <h4>
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
