// Component that contains general info of the teacher such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React from 'react'
import '../assets/styles/components/InfoTeacher.scss'
import { Link } from 'react-router-dom'


const InfoTeacher = ({email, address, phone, age, score, id}) => {
    
    
    return (
      <div className="generalInfo">
        <ul>
          <li className="Country">Age: {age}</li>
          <li className="City">City: </li>
          <li className="Address">Address: {address}</li>
          <li className="PostCode">Score: {score}</li>
          <li className="Email">E-mail: {email}</li>
          <li className="Telephone">Telephone: {phone}</li>
          <Link className="Button" to={`/teacher_report/${id}`}>
            <p>Download Report</p>
          </Link>

        </ul>
      </div>
    );
}

export default InfoTeacher;
