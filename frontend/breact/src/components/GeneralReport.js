import React from 'react'
import useInitialState from '../hooks/generalReport.js';
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/GeneralReport.scss'


const GeneralReport = (props) => {
    const cK = (document.cookie).split('school_id=')[1].split(';')[0];
    const API = 'http://127.0.0.1:8000/api/general_report/?id=' + cK;
    const report = useInitialState(API);
    console.log(report)
    return (
        <div className="generalReport">
        <Typography variant='h4' className="TeacherName">
        School Report
        </Typography>
        <hr className="titleSpace"/>
        <table className="globalTable">
        <tr className="GlobalHeaders">
            <th>Total Students</th>
            <th>Total Teachers</th>
            <th>Average Teachers Score</th>
            <th>Teachers Average Age</th>
        </tr>
        <tr className="GlobalValues">
            <td>{ report.num_students }</td>
            <td>{ report.num_teachers }</td>
            <td>{ report.average_score }</td>
            <td>{ report.teacher_average_age }</td>
        </tr>
        </table>
        <br className="table1Space"/>
        <table className="teachersTable">
        <tr className="TeacherHeaders">
            <th>Name</th>
            <th>Total Classrooms</th>
            <th>Total Lessons</th>
            <th>Total Students</th>
            <th>Score</th>
        </tr>
        { report.teacher_data?.map(item => 
        <tr>
            <td>{item.name}</td>
            <td>{item.num_classrooms_by_teacher}</td>
            <td>{item.num_lessons_by_teacher}</td>
            <td>{item.num_students_by_teacher}</td>
            <td>{item.score_by_teacher}</td>
        </tr>) }
        </table>
        </div>
    )
}

export default GeneralReport;