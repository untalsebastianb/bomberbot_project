// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';


// import DescriptionSchool from '../components/DescriptionSchool'
// import InfoSchool from '../components/InfoSchool'
// import '../assets/styles/components/SchoolProfile.scss'
// import Typography from '@material-ui/core/Typography';


// class ComponentToPrint extends React.Component {
//   render() {
//     return(
//     <div className='schoolProfile'>
//       <Typography variant='h3'>
//         School Profile
//       </Typography>
//       <hr className="Title"/>
//       <DescriptionSchool />
//       <InfoSchool />
//     </div>
// )  
// }
// }

// const Example = () => {
//   const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });
 
//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button onClick={handlePrint}>Print this out!</button>
//     </div>
//   );
// };

// export default Example;