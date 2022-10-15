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

const Tree = ({ data, key }) => {
  return (
    <>
      <ul>
        {data.map((el) => {
          if ("subFiles" in el) {
            return (
              <>
                <li key={key}>{el.file}</li>
                {<Tree data={el.subFiles} />}
              </>
            );
          } else {
            return (
              <>
                <li key={key}>{el.file}</li>
                {/* {<Tree data={el.subFiles} />} */}
              </>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Tree;

// {/* <>
// <ul>
//   {data.map((el) => {
//     if ("subFiles" in el) {
//       return (
//         <>
//           <li key={key}>{el.file}</li>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <li key={key}>{el.file}</li>
//           {<Tree data={el.subFiles} />}
//         </>
//       );
//     }
//   })}
// </ul>
// </> */}

//
//
//
/////
//
//
///
///
///
///

///
//  {/* {data.map((el) => {
//         if ("subFiles" in el) {
//           console.log("subfiles", el.subFiles);

//           return
//         }
//       })} */}
