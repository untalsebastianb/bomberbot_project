import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react'
import '../assets/styles/components/TeacherProfile.scss'
import GeneralReport from '../components/GeneralReport'

class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <GeneralReport />
        </div>
      );
    }
  }


const General_to_print = () => {
    const componentRef = useRef();
   
    return (
      <div className='GeneralReport'>
        <ComponentToPrint ref={componentRef} />
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
      </div>
    );
  };

  export default General_to_print