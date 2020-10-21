import React from 'react'
import useInitialState from '../hooks/teacherReport.js';
import Typography from '@material-ui/core/Typography';
import '../assets/styles/components/TeacherReport.scss'

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
        <hr className="titleSpace"/>
        <table className="globalTable">
        <tr className="GlobalHeaders">
            <th>Name</th>
            <th>Total Students</th>
            <th>Score</th>
        </tr>
        <tr className="GlobalValues">
            <td>{ report.name }</td>
            <td>{ report.total_students }</td>
            <td>{ report.score }</td>
        </tr>
        </table>
        <br className="table1Space"/>
        <table className="classesTable">
        <tr className="classesHeaders">
            <th>Class Name</th>
            <th>Number Lessons</th>
            <th>Total Students</th>
            <th>Average Score</th>
        </tr>
        { report.classrooms?.map(item => 
        <tr>
            <td>{item.name}</td>
            <td>{item.lessons}</td>
            <td>{item.total_students}</td>
            <td>{item.average_score}</td>
        </tr>) }
        </table>
        </div>
    )
}
export default TeacherReport;