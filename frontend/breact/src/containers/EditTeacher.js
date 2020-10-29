import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography';
import { useForm } from '../hooks/useForm';
import useTeacherInfo from '../hooks/useTeacherInfo';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { Alert } from '@material-ui/lab';
 

// containaer for School profile view
const EditTeacher = ( props ) => {
//   const cK = (document.cookie).split('user=')[1].split(';')[0];
//   const API = 'http://127.0.0.1:8000/api/schools/?user=' + cK;
//   const school = useInitialState(API);

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
const teacher_id = props.match.params.id
const API = `http://127.0.0.1:8000/api/teacher_by_id/?id=${teacher_id}`
const teacherInfo = useTeacherInfo(API)



useEffect(() => {
    document.getElementById('fn').value = teacherInfo.first_name
    document.getElementById('ln').value = teacherInfo.last_name
    document.getElementById('em').value = teacherInfo.email
    document.getElementById('ad').value = teacherInfo.address
    document.getElementById('cit').value = teacherInfo.city
    document.getElementById('ag').value = teacherInfo.age
    document.getElementById('ph').value = teacherInfo.phone
    document.getElementById('academic_dg').value = teacherInfo.academic_dg
    reset()
}, [teacherInfo])


const [{first_name, last_name, email, address, city, age, phone, academic_dg, picture}, handleInputChange, handleInputChangeImg, reset] = useForm({
    first_name: teacherInfo.first_name,
    last_name: teacherInfo.last_name,
    email: teacherInfo.email,
    city: teacherInfo.city,
    address: teacherInfo.address,
    age: teacherInfo.age,
    phone: teacherInfo.phone,
    academic_dg: teacherInfo.academic_dg,
})


// const handleInputChangeImg = (e) => {
//     console.log(e.target.files[0])
// }

// const [imagestate, setimagestate] = useState(initialState)
const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('first_name', first_name)
    data.append('last_name', last_name)
    data.append('email', email)
    data.append('address', address)
    data.append('city', city)
    data.append('age', age)
    data.append('phone', phone)
    data.append('academic_dg', academic_dg)
    data.append('id', teacher_id)
    data.append('school_id', teacherInfo.school_id_id)
    if (picture){
        data.append('picture', picture)
    }

    

    fetch(`http://127.0.0.1:8000/api/teacher/${teacher_id}/`, {
        method: 'PUT',
        headers: {
            'X-CSRFToken': csrftoken
        },
        body: data
    })
    .then((response) => {
        if(!response.ok) throw new Error(response.status);
        else return response.json();
      })
    
    .then(() => {
        document.getElementById('teacher_edited').style.display="block";
        document.getElementById('teacher_error').style.display="none";
        setTimeout(function(){ document.getElementById('teacher_edited').style.display = "none"; }, 2000);
    })
    .catch(() => {
        document.getElementById('teacher_error').style.display="block";
        document.getElementById('teacher_edited').style.display="none";
        setTimeout(function(){ document.getElementById('teacher_error').style.display = "none"; }, 2000);
    });

    
    

}

  return (
    <div class="edit-teacher">
      <Typography variant='h2'>
        Edit Teacher
      </Typography>
      <hr className="Title"/>
      
      <form onSubmit={handleRegister} encType="multipart/form-data" class="form-teacher">
                
                <div class="row">
                    <label>First Name:</label>
                    <input 
                        type="text"
                        name="first_name"
                        id='fn'
                        // autoComplete="off"
                        value={first_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="last_name"
                        id='ln'
                        // autoComplete="off"
                        value={last_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Email:</label>
                    <input 
                        type="text"
                        name="email"
                        id='em'
                        // autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Address:</label>
                    <input 
                        type="text"
                        name="address"
                        id='ad'
                        // autoComplete="off"
                        value={address}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>City:</label>
                    <input 
                        type="text"
                        name="city"
                        id='cit'
                        // autoComplete="off"
                        value={city}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Age:</label>
                    <input
                        type="text"
                        name="age"
                        id='ag'
                        // autoComplete="off"
                        value={age}
                        onChange={handleInputChange}
                    />
                </div>
                <div class="row">
                    <label>Phone:</label>
                    <input 
                        type="text"
                        name="phone"
                        id='ph'
                        // autoComplete="off"
                        value={phone}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="row">
                    <label>Degree:</label>
                    <select id='academic_dg' name='academic_dg' onChange={handleInputChange} class="selector">
                        <option value="Professional"> Professional </option>
                        <option value="Master"> Master </option>
                        <option value="PhD"> PhD </option>
                    </select>
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
            <div id="teacher_edited" class="response-edit">
                <Alert style={{fontSize: 15}} onClose={() => {document.getElementById('teacher_edited').style.display = "none";}}>Teacher updated!!</Alert>
            </div>
            <div id="teacher_error" class="response-edit">
                <Alert severity="error" style={{fontSize: 15}} onClose={() => {document.getElementById('teacher_error').style.display = "none";}}>Teacher was not updated, check that the fields are not empty</Alert>
            </div>
    </div>
  )
}

export default EditTeacher;