// Component that contains general info of the teacher such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React from 'react'
import '../assets/styles/components/InfoTeacher.scss'
import { Link } from 'react-router-dom'
import '../assets/styles/components/ButtonEdit.scss'


const InfoTeacher = ({email, address, phone, age, score, id, city}) => {
    
    return (
      <div className="generalInfo">
        <ul>
          <li className="Country">Age: {age}</li>
          <li className="City">City: {city}</li>
          <li className="Address">Address: {address}</li>
          <li className="PostCode">Score: {score}</li>
          <li className="Email">E-mail: {email}</li>
          <li className="Telephone">Telephone: {phone}</li>
          <Link className="Button" to={`/teacher_report/${id}`}>
            <p>Download Report</p>
          </Link>
          <Link className="ButtonEdit" to={`/edit_teacher/${id}`}>
            <p >Edit</p>
          </Link>
        </ul>
      </div>
    );
}

export default InfoTeacher;
