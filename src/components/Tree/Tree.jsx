import React from "react";

/*const data = [
  {
    file: "documents",
    subFiles: [
      {
        file: "27-10-1990",
      },
      {
        file: "invoices",
        subFiles: [
          {
            file: "electricityBills",
            subFiles: [{ file: "invoice1" }, { file: "invoice2" }],
          },
          { file: "invoice12" },
        ],
      },
    ],
  },
  {
    file: "photos",
    subFiles: [
      {
        file: "summer2020",
        subFiles: [{ file: "10.25" }, { file: "10.26" }, { file: "10.27" }],
      },

      
    ],
  },
];*/

const Tree = ({ data }) => {
  console.log("File tree", data);
  return (
    <div style={{ border: "solid 1px black" }}>
      {data.map((el) => {
        if ("subFiles" in el) {
          console.log("subfiles", el);
          return el.subFiles((x) => {
            return <Tree data={x} />;
          });
        } else {
          return <p>{el.file}</p>;
        }
      })}
    </div>
  );
};
export default Tree;
