import React from 'react'
import emailjs from 'emailjs-com';
import '../assets/styles/components/FormComunication.scss'
import { useForm } from '../hooks/useForm';
import { getTeachers } from '../search/getTeachers';
import useInitialState from '../hooks/useInitialState';
import TeacherListMail from './TeacherListMail';

export default function ContactUs() {


    const school_id = document.cookie
  .split('; ')
  .find(row => row.startsWith('school_id'))
  .split('=')[1];

  const [ {teacherToSearch}, handleInputChange ] = useForm('');
  
  const API = `http://127.0.0.1:8000/api/teacher/?school_id=${school_id}`
  const teachers = useInitialState(API);
  const filtered_teachers = getTeachers(teachers, teacherToSearch)
  
    const handleTeacher = (email, first_name) => {
        document.getElementById('Email').value = email
        document.getElementById('to-name').value = first_name
    }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(filtered_teachers)
    console.log(teacherToSearch)
  }


    /*clear the form fields*/
    function clear(){
        document.getElementById('story').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('to-name').value = "";
        document.getElementById('subject').value = "";
   }
   /*change the message color*/
   function changecolor(actualclass, newclass){
        document.getElementById('text-response').classList.remove(actualclass);
        document.getElementById('text-response').classList.add(newclass);
   }

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_i5whmbn', 'template_itn7q66', e.target, 'user_WLAva5REpynihKep6GzNN')
        .then((result) => {
            console.log(result.text);
            changecolor('alert','confirmation');
            document.getElementById('text-response').innerHTML =("Message sent");
            clear();
        }, (error) => {
            console.log(error.text);
            changecolor('confirmation', 'alert');
            document.getElementById('text-response').innerHTML =("Sorry we couldn't sent your message :(");
            clear();
        });
    }
    return(  
    <>
    
    <form onSubmit={sendEmail}>
       <div className="block-input">
            <div className="block-init">
                <input type="text" id ="Email" placeholder="Email" name="email"></input>
                <input type="text" id ="to-name" placeholder="To Name" name="to_name"></input>
            </div>
            <input type="text" id="subject" placeholder="Subject" name="subject"></input>
            
        </div>
        <div className="block-message">
            <textarea id="story" name="message" rows="5" cols="33" placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </div>
        <div id="text-response" class="text-response"></div>
    </form>

     {/* <SearchBar/> */}
     <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder='Search a teacher'
          name='teacherToSearch'
          value={ teacherToSearch }
          onChange={ handleInputChange }
        />
      </form>
      
      <span className='search-icon'></span>
    </div>

    <br></br>
      {
        filtered_teachers?.length > 0 &&
        <>
            {
              filtered_teachers?.map(item => {
                return (
                <TeacherListMail key={item.id} handleTeacher={handleTeacher} {...item} />
                )
              })
            }
        </>
      }

    </>    
    );
}
