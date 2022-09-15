import React from "react";

const Tree = ({ data, key }) => {
  console.log(data);
  return (
    <div className="tree">
      {data.map((el) => (
        <p key={key}>{el.file}</p>
      ))}
    </div>
  );
};

export default Tree;
