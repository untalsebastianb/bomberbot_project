import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react'
import '../assets/styles/components/TeacherProfile.scss'
import TeacherReport from '../components/TeacherReport.js'
import '../assets/styles/components/TeacherReport.scss'

class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <TeacherReport id={this.props.id}/>
        </div>
      );
    }
  }


const Teacher_to_print = (props) => {
    const componentRef = useRef();
    const teacherId = props.match.params.id
    return (
      <div className='TeachersReport'>
        <ComponentToPrint ref={componentRef} id={teacherId}/>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
      </div>
    );
  };

  export default Teacher_to_print