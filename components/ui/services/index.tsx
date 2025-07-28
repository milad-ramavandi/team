import { services_list } from "../../../data/services";
import Service from "./service";

const Services = () => {
  return (
    <div className="mil-relative mil-p-160-100">
      <div className="container">
        <div className="row">
          {services_list?.map((item, index) => {
            return <Service key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
