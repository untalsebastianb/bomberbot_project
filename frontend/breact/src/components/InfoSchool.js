// Component that contains general info of the School such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React from 'react'
import '../assets/styles/components/InfoSchool.scss'
import '../assets/styles/components/ButtonEdit.scss'
import { Link } from 'react-router-dom'

const InfoSchool = (props) => {
    
    
    return (
      <div className="generalInfo">
        <ul>
          <li className="Country"><b>Country:</b> { props.fields['country'] }</li>
          <li className="City"><b>City:</b> { props.fields['city'] }</li>
          <li className="Address"><b>Address:</b> { props.fields['address'] }</li>
          <li className="PostCode"><b>Postal code:</b> { props.fields['postal_code']}</li>
          <li className="Email"><b>E-mail:</b> { props.fields['email'] }</li>
          <li className="Telephone"><b>Telephone:</b>{ props.fields['phone'] }</li>
          {/* <div className="Button" onClick={ status }></div> */}
          <Link className="Button" to='/general_report'>
            <p>Download Report</p>
          </Link>
          <Link className="ButtonEdit" to='/general_report'>
            <p>Edit School</p>
          </Link>
        </ul>
      </div>
    );
}

export default InfoSchool;
