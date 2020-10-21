// Component that contains: teacher profile picture, name and experience field.
import React from 'react'
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/DescriptionTeacher.scss'

const DescriptionTeacher = ({first_name}) => {
    return (
      <div className="Description">
      <div className="ImageLeft">
      <img className="profilePicture" alt="Teacher profile" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"></img>
      </div>
      <div className="DescriptionRight">
      <div  className="TeacherName">
        {first_name}
      </div>
      <p className="teacherExperience">Lorem impsum adnad adnaidas anasmn ainaisdnasidnasi</p>
      </div>
      </div>
    );
}

export default DescriptionTeacher;