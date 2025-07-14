
 import { ICounter } from "../../../types/counter";
import Counter from "./Counter";

const Counters = ({ counters }: { counters: ICounter[] }) => {
  return (
    <div className="mil-p-0-130">
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
