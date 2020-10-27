// Component that contains: teacher profile picture, name and experience field.
import React from 'react'
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/DescriptionTeacher.scss'

const DescriptionTeacher = ({first_name, last_name, picture}) => {
    return (
      <div className="Description">
      <div className="ImageLeft">
      {
        picture&&
        <img className="profilePicture" alt="Teacher profile" src={"http://127.0.0.1:8000/media/" + picture}></img>
      }
      </div>
      <div className="DescriptionRight">
      <div  className="TeacherName">
        {first_name + " " + last_name}
      </div>
      {/* <p className="teacherExperience">Lorem impsum adnad adnaidas anasmn ainaisdnasidnasi</p> */}
      </div>
      </div>
    );
}

export default DescriptionTeacher;