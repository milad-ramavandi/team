
 import { ICounter } from "../../../types/counter";
import Counter from "./Counter";

const Counters = ({ counters }: { counters: ICounter[] }) => {
  return (
    <div className="mil-p-160-100" id="counters">
      <div className="container text-center">
        <div className="row">
          {counters.map((item, index) => {
            return <Counter key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Counters;
