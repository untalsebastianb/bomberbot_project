// Component that contains: teacher profile picture, name and experience field.
import React from 'react'
import '../assets/styles/components/DescriptionTeacher.scss'


/**
 * Component for showing details of the teacher linked to a school.
 *
 * @component
 * @example
 * const first_name = 'Finn'
 * const last_name = 'Muller'
 * const academic_dg = 'PHD'
 * 
 * return (
 *   <DescriptionTeacher {...obj} />
 * )
 */

const DescriptionTeacher = ({ first_name, last_name, academic_dg, picture }) => {
  return (
    <div className="Description">
      <div className="ImageLeft">
        {
          picture ?
            <img className="profilePicture" alt="Teacher profile" src={"http://127.0.0.1:8000/media/" + picture}></img> :
            <img className="profilePicture" alt="Teacher profile"></img>
        }
      </div>
      <div className="DescriptionRight">
        <div className="TeacherName">
          {first_name + " " + last_name}
        </div>
        <p className="teacherExperience">{academic_dg}</p>
      </div>
    </div>
  );
}

export default DescriptionTeacher;