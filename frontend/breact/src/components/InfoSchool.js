// Component that contains general info of the School such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React from 'react'
import '../assets/styles/components/InfoSchool.scss'
import { Link } from 'react-router-dom'

const InfoSchool = (props) => {
    
    
    return (
      <div className="generalInfo">
        <ul>
          <li className="Country">Country: { props.fields['country'] }</li>
          <li className="City">City: { props.fields['city'] }</li>
          <li className="Address">Address: { props.fields['address'] }</li>
          <li className="PostCode">Postal code: { props.fields['postal_code']}</li>
          <li className="Email">E-mail: { props.fields['email'] }</li>
          <li className="Telephone">Telephone: { props.fields['phone'] }</li>
          {/* <div className="Button" onClick={ status }></div> */}
          <Link className="Button" to='/general_report'/>
        </ul>
      </div>
    );
}

export default InfoSchool;
