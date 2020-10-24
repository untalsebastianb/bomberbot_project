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

    const handleTeacher2 = (e) => {
      const data = document.getElementById('Email').value
      // document.getElementById('to-name').value = first_name
      
      if (data === ''){
        document.getElementById('to-name').value = ''
        document.getElementById('Email').value = ''
      } else if (!data.split(' ')[1]) {
        document.getElementById('to-name').value = ''
        
      } else {
        const email = data.split(' ')[0]
        const first_name = data.split(' ')[1]
        document.getElementById('Email').value = email
        document.getElementById('to-name').value = first_name
      }
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
    <div className="mail">
      <div className='mail_container'>
        <form onSubmit={sendEmail}>
          <div className="block-input">
          <div className="block-init">
            <input type="text" id ="Email" list='list' placeholder="Email" name="email" onChange={handleTeacher2}></input>
            <datalist id='list'>
            {
              filtered_teachers?.map(item => {
              return (
                      <option key={item.id} >{item.first_name + " " + item.email}</option>  
                      )
                    })
              }
              </datalist>
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
      </div>
      </div>
      
    );}
