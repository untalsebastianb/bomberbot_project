import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { useForm } from '../hooks/useForm';
import useTeacherInfo from '../hooks/useTeacherInfo';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import useInitialState from '../hooks/useInitialState';

 

const EditSchool = ( props ) => {

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');
const school_id = props.match.params.id

const API = 'http://127.0.0.1:8000/api/schools/' + school_id;
const schoolInfo = useInitialState(API)

useEffect(() => {
    document.getElementById('cnt').value = schoolInfo.country
    document.getElementById('cit2').value = schoolInfo.city
    document.getElementById('ad2').value = schoolInfo.address
    document.getElementById('pc2').value = schoolInfo.postal_code
    document.getElementById('ph2').value = schoolInfo.phone
    document.getElementById('nm2').value = schoolInfo.name
    document.getElementById('em2').value = schoolInfo.email
    reset()
}, [schoolInfo])

const [{name, country, email, address, city, phone, postal_code, picture, user}, handleInputChange, handleInputChangeImg, reset] = useForm({
    country: schoolInfo.country,
    city: schoolInfo.city,
    address: schoolInfo.address,
    postal_code: schoolInfo.postal_code,
    phone: schoolInfo.phone,
    name: schoolInfo.name,
    email: schoolInfo.email,
})



const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('country', country)
    data.append('city', city)
    data.append('address', address)
    data.append('postal_code', postal_code)
    data.append('phone', phone)
    data.append('name', name)
    data.append('email', email)
    data.append('user', user)
    if (picture){
        data.append('picture', picture)
    }
    data.append('user', schoolInfo.user)
    
    

    fetch(`http://127.0.0.1:8000/api/schools/${school_id}/`, {
        method: 'PUT',
        headers: {
            'X-CSRFToken': csrftoken
        },
        body: data
    })
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
    
    .then(() => {
        document.getElementById('school_edited').innerHTML = "Edited successful"
        setTimeout(function(){ document.getElementById('school_edited').innerHTML = ""; }, 1000);
    })
    .catch(() => {
        document.getElementById('school_edited').innerHTML = "Edited unsuccessful, please verify data"
        setTimeout(function(){ document.getElementById('school_edited').innerHTML = ""; }, 1000);
    });

    
    

}

  return (
    <div class="edit-teacher">
      <Typography variant='h2'>
        Edit School
      </Typography>
      <hr className="Title"/>
      
      <form onSubmit={handleRegister} encType="multipart/form-data" class="form-teacher">
                
                <div class="row">
                    <label>School Name:</label>
                    <input 
                        type="text"
                        name="name"
                        id='nm2'
                        // autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        id='em2'
                        // autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Country:</label>
                    <input 
                        type="text"
                        name="country"
                        id='cnt'
                        // autoComplete="off"
                        value={country}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="row">
                    <label>City:</label>
                    <input 
                        type="text"
                        name="city"
                        id='cit2'
                        // autoComplete="off"
                        value={city}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="row">
                    <label>Address:</label>
                    <input 
                        type="text"
                        name="address"
                        id='ad2'
                        // autoComplete="off"
                        value={address}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="row">
                    <label>Postal Code:</label>
                    <input
                        type="text"
                        name="postal_code"
                        id='pc2'
                        // autoComplete="off"
                        value={postal_code}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="row">
                    <label>Phone:</label>
                    <input 
                        type="text"
                        name="phone"
                        id='ph2'
                        // autoComplete="off"
                        value={phone}
                        onChange={handleInputChange}
                    />
                </div>

                
                <div class="row-button">
                    <div class="button-photo">
                        <input
                            accept="image/*"
                            onChange={handleInputChangeImg}
                            id='picture'
                            type="file"
                            name="picture"
                            className="photo"
                        />
                   
                        <label htmlFor='picture'>
                            <Button variant="contained" border={1} component="span" size="medium"   style={{backgroundColor: "#3069f4", color: "white", width: 150, height:40}}>
                            <Typography variant='h5'>
                                Upload
                            </Typography>
                            <IconButton color="white" aria-label="upload picture" component="span">
                            <PhotoCamera />
                            </IconButton>
                            </Button>
                        </label>
                        
                    </div>
                        <button type="submit" id="submit" className="submit">
                    
                        </button>
                        <label htmlFor='submit'>
                            <Button variant="contained" border={1} component="span" size="medium"  style={{backgroundColor: "#3069f4", color: "white", width: 150 ,height:40}}>
                            <Typography variant='h5'>
                                Update
                            </Typography>
                           
                            </Button>
                        </label>

                </div>
              
                
                
                
            </form>
                <div id="school_edited" className="text-response"></div>
    </div>
  )
}

export default EditSchool;