// Component that contains general info of the teacher such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React from 'react'
import '../assets/styles/components/InfoTeacher.scss'
import { Link } from 'react-router-dom'


const InfoTeacher = () => {
    
    
    return (
      <div className="generalInfo">
        <ul>
          <li className="Country">Country: </li>
          <li className="City">City: </li>
          <li className="Address">Address: </li>
          <li className="PostCode">Post code: </li>
          <li className="Email">E-mail: </li>
          <li className="Telephone">Telephone: </li>
          <Link className="Button" to='/teacher_report'/>

        </ul>
      </div>
    );
}

export default InfoTeacher;
