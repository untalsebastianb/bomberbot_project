import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react'
import '../assets/styles/components/TeacherProfile.scss'

class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>aqui van los componentes para el teacher report</div>
      );
    }
  }


const Teacher_to_print = () => {
    const componentRef = useRef();
   
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };

  export default Teacher_to_print