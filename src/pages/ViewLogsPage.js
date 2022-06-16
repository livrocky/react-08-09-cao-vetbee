// import { useEffect, useState } from 'react';
// // import SingleLogPage from '../components/ViewLogs/SingleLogPage';
// import ViewLogs from '../components/ViewLogs/ViewLogs';

// const ViewLogsPage = () => {
//   const [petsArr, setPetsArr] = useState([]);
//   const getPetsAndSetState = async () => {
//     const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
//     const dataInJs = await resp.json();

//     const onlyName = dataInJs.map(({ name }) => ({
//       name,
//     }));
//     console.log('onlyName===', onlyName);
//     setPetsArr(onlyName);
//   };

//   useEffect(() => {
//     getPetsAndSetState();
//   });

//   return (
//     <div>
//       {petsArr.map((pObj) => (
//         <div>
//           {/* <SingleLogPage key={pObj.id} {...pObj} /> */}
//           <ViewLogs key={pObj.id} {...pObj} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewLogsPage;

//__________________________________________________//

const ViewLogs = (props) => {
  return <div>ViewLogsPage{props.id}</div>;
};

export default ViewLogs;
