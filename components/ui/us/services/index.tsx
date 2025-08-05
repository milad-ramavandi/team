
import Service from "../service";
import Counter from "../counter";
import { texts } from "../../../../lib/texts";
import { ICounter, IService } from "../../../../types/us";

const counters_list: ICounter[] = texts?.usPage?.services?.counters_list;
const services_list: IService[] = texts?.usPage?.services?.services_list

const Services = () => {
  return (
    <div className="mil-bug-fix">
      <div className="container">
        <div className="row mil-jcb">
          <div className="col-12">
            <p className="mil-stylized mil-m2 mil-mb60">{texts?.usPage?.services?.p}</p>
            <h2 className="mil-head1 mil-mb90">
              {texts?.usPage?.services?.h2?.span1} <span className="mil-a1">{texts?.usPage?.services?.h2?.span2}</span> {texts?.usPage?.services?.h2?.span3}
            </h2>
          </div>
          <div className="col-lg-7">
            <ul className="mil-services-list mil-mb160">
              {services_list.map((item, index) => {
                return <Service key={index} {...item} />;
              })}
            </ul>
          </div>
          <div className="col-lg-3 mil-mb130">
            <div className="row">
              {counters_list?.map((item, index) => {
                return <Counter key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
