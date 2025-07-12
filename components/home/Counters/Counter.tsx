import { ICounter } from "@/types/counter";

const Counter = ({ number, title }: ICounter) => {
  return (
    <div className="col-lg-4">
      <div className="mil-counter-item mil-stl mil-mb30 mil-768-mb60 mil-up">
        <h4 className="mil-up">
          {number}<span className="mil-a2">+</span>
        </h4>
        <div className="mil-counter-text">
          <h5 className="mil-head4 mil-m1 mil-up">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
