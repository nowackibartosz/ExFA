import React from "react";

import "./Wrapper.css";



type ListProps = {
  children: React.ReactChild;
};



const Wrapper = ({ children}:ListProps) => {




  
  return <div className="hello">{children}</div>;
};

export default Wrapper;
