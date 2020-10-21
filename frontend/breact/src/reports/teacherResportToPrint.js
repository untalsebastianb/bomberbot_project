import ReactToPrint from 'react-to-print';
import React, { useRef } from 'react'
import '../assets/styles/components/TeacherProfile.scss'
import TeacherReport from '../components/TeacherReport.js'

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
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} id={teacherId}/>
      </div>
    );
  };

  export default Teacher_to_print