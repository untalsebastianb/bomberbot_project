import React from 'react'
import useInitialState from '../hooks/teacherReport.js';
import Typography from '@material-ui/core/Typography';

const TeacherReport = (props) => {
    const teacherId = props.id;
    const schoolCK = (document.cookie).split('school_id=')[1].split(';')[0];
    const API = 'http://127.0.0.1:8000/api/teacher_report/?school_id=' + schoolCK + '&teacher_id=' + teacherId;
    const report = useInitialState(API);
    console.log(report)
    return (
        <div className="teacherReport">
        <Typography variant='h4' className="TeacherName">
            Teacher Report
        </Typography>
        </div>
    )
}
export default TeacherReport;