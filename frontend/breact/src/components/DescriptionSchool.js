// Component that contains: School profile picture, name and experience field.
import React from 'react'
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/DescriptionSchool.scss'


/**
 * Component for showing details of the school.
 *
 * @component
 * @example
 * const name = 'Holberton School'
 * 
 * return (
 *   <DescriptionSchool {...obj} />
 * )
 */


const DescriptionSchool = ({ name, picture }) => {
  return (
    <div className="Description">
      <div className="ImageLeft">
        <img className="profilePicture" alt="School profile" src={picture}></img>
      </div>
      <div className="DescriptionRight">
        <Typography variant='h4' className="SchoolName">
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default DescriptionSchool;