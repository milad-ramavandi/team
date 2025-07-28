import React from "react";
import Breadcrumb from "../../components/ui/breadcrumb";
import CallAction from "../../components/ui/services/call-action";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mil-mt180">
      <Breadcrumb />
      {children}
      <CallAction />
    </div>
  );
};

export default ServicesLayout;
