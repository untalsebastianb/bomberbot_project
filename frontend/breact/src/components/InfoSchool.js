// Component that contains general info of the School such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react'
import '../assets/styles/components/InfoSchool.scss'


const InfoSchool = (props) => {
    
    const [report, setStatus] = useState(false);
    
    function status () {
      if (report) {
        setStatus(false);
      }
      else {
        setStatus(true);
      }
    }
    useEffect(() => {
      console.log(report);
    }, [report]);

    return (
      <div className="generalInfo">
        <ul>
          <li className="Country">Country: { props.fields['country'] }</li>
          <li className="City">City: { props.fields['city'] }</li>
          <li className="Address">Address: { props.fields['address'] }</li>
          <li className="PostCode">Post code: </li>
          <li className="Email">E-mail: { props.fields['email'] }</li>
          <li className="Telephone">Telephone: { props.fields['phone'] }</li>
          <div className="Button" onClick={ status }></div>
          { report ? <div className="Report">Downnload report</div> : null}
        </ul>
      </div>
    );
}

export default InfoSchool;
