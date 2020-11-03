import React from 'react'
import '../assets/styles/components/InfoTeacher.scss'
import { Link } from 'react-router-dom'
import '../assets/styles/components/ButtonEdit.scss'


/**
 * Component for showing the school general info.
 *
 * @component
 * @example
 * const email = 'example@gmail.com'
 * const address = '5th avenue 2433'
 * const phone = '+51 223 211123'
 * const age = 34
 * const score = 5.0
 * const id = 'aD333s66XZ221'
 * const city = 'Munich'
 * 
 * return (
 *   <InfoTeacher {...teacherInfo} />
 * )
 */


const InfoTeacher = ({ email, address, phone, age, score, id, city }) => {

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
