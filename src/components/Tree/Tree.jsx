import React from "react";

// ## Zadanie 10 (useState)

// Wróć do zadania File Tree Generator i pozwól na zwijanie i rozwijanie subFiles




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
