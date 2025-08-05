
import { texts } from "../../../lib/texts";
import { IService } from "../../../types/services";
import Service from "./service";

const services_list: IService[] = texts?.servicesPage?.services;

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
