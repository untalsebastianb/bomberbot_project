import React from 'react'
import emailjs from 'emailjs-com';
import '../assets/styles/components/FormComunication.scss'


export default function ContactUs() {
    function clear(){
        document.getElementById('story').value = "";
        document.getElementById('Email').value = "";
        document.getElementById('to-name').value = "";
        document.getElementById('subject').value = "";
   }
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_i5whmbn', 'template_itn7q66', e.target, 'user_WLAva5REpynihKep6GzNN')
        .then((result) => {
            console.log(result.text);
            document.getElementById('text-response').classList.remove("alert");
            document.getElementById('text-response').classList.add("confirmation");
            document.getElementById('text-response').innerHTML =("Message sent");
            clear();
        }, (error) => {
            console.log(error.text);
            document.getElementById('text-response').classList.remove("confirmation");
            document.getElementById('text-response').classList.add("alert");
            document.getElementById('text-response').innerHTML =("Sorry we couldn't sent your message :(");
            clear();
        });
    }
    return(   
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
    );
}
