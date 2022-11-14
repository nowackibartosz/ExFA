import React from "react";
// import { useState } from "react";
// import "./Tree.css";
// // ## Zadanie 10 (useState)

// // Wróć do zadania File Tree Generator i pozwól na zwijanie i rozwijanie subFiles

// const Tree = ({ data }:{data: }) => {
//   const [vis, setVis] = useState(false);

//   const handleVis = () => {
//     setVis(!vis);
//   };
//   return (
//     <>
//       <ul>
//         {data.map((el) => {
//           if ("subFiles" in el) {
//             return (
//               <>
//                 <li onClick={handleVis} key={el.flie}>
//                   <strong>{el.file}</strong>
//                 </li>

//                 {vis ? <Tree data={el.subFiles} /> : null}
//               </>
//             );
//           } else {
//             return (
//               <>
//                 <li key={key}>{el.file}</li>
//               </>
//             );
//           }
//         })}
//       </ul>
//     </>
//   );
// };

// export default Tree;

// // {/* <>
// // <ul>
// //   {data.map((el) => {
// //     if ("subFiles" in el) {
// //       return (
// //         <>
// //           <li key={key}>{el.file}</li>
// //         </>
// //       );
// //     } else {
// //       return (
// //         <>
// //           <li key={key}>{el.file}</li>
// //           {<Tree data={el.subFiles} />}
// //         </>
// //       );
// //     }
// //   })}
// // </ul>
// // </> */}

// //
// //
// //
// /////
// //
// //
// ///
// ///
// ///
// ///

// ///
// //  {/* {data.map((el) => {
// //         if ("subFiles" in el) {
// //           console.log("subfiles", el.subFiles);

// //           return
// //         }
// //       })} */}
