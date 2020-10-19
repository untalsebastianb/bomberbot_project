// Component that contains: School profile picture, name and experience field.
import React from 'react'
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/DescriptionSchool.scss'

const DescriptionSchool = (props) => {
    return (
      <div className="Description">
      <div className="ImageLeft">
      <img className="profilePicture" alt="School profile" src="https://images.unsplash.com/photo-1561525962-955e5610601f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
      </div>
      <div className="DescriptionRight">
      <Typography variant='h4' className="SchoolName">
        { props.name }
      </Typography>
      <p className="SchoolDescription">Lorem impsum adnad adnaidas anasmn ainaisdnasidnasi</p>
      </div>
      </div>
    );
}

export default DescriptionSchool;