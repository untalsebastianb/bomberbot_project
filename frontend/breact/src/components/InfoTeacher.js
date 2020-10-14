// Component that contains general info of the teacher such as: country, city, E-mail...
//import { blue } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react'
import '../assets/styles/components/InfoTeacher.scss'


const InfoTeacher = () => {
    
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
          <li className="Country">Country: </li>
          <li className="City">City: </li>
          <li className="Address">Address: </li>
          <li className="PostCode">Post code: </li>
          <li className="Email">E-mail: </li>
          <li className="Telephone">Telephone: </li>
          <div className="Button" onClick={ status }></div>
          { report ? <div className="Report">Downnload report</div> : null}
        </ul>
      </div>
    );
}

export default InfoTeacher;
