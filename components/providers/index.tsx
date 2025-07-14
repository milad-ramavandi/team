import React from "react";
import BootstrapProvider from "./bootstrap-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BootstrapProvider>{children}</BootstrapProvider>;
};

export default Providers;
