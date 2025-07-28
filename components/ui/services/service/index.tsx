import React from "react";
import { IService } from "../../../../types/services";

const Service = ({ title, slug, description, list }: IService) => {
  return (
    <div className="col-lg-4">
      <div className="mil-service-card-lg mil-mb160">
        <h3 className="mil-head3 mil-mb60">{title}</h3>
        <p className="mil-text-md mil-shortened mil-mb60">{description}</p>
        <ul className="mil-mb60 p-0">
          {list?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <div className="mil-mb30">
          <a href={`/services/${slug}`} className="mil-stylized-btn mil-c-gone">
            <i className="fal fa-arrow-up"></i>
            <span>Read more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
