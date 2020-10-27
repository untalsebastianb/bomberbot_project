import React, { useEffect, useState } from 'react'
import '../assets/styles/components/SchoolProfile.scss'
import '../assets/styles/components/CreateTeacher.scss'
import Typography from '@material-ui/core/Typography';
import { useForm } from '../hooks/useForm';
import useTeacherInfo from '../hooks/useTeacherInfo'

 

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
        document.getElementById('teacher_edited').innerHTML = "Edited successful"
        setTimeout(function(){ document.getElementById('teacher_edited').innerHTML = ""; }, 1000);
    })
    .catch(() => {
        document.getElementById('teacher_edited').innerHTML = "Edited unsuccessful, please verify data"
        setTimeout(function(){ document.getElementById('teacher_edited').innerHTML = ""; }, 1000);
    });

    
    

}

  return (
    <div class="create-teacher">
      <Typography variant='h2'>
        Edit Teacher
      </Typography>
      <hr className="Title"/>
      
      <form onSubmit={handleRegister} encType="multipart/form-data" class="form-teacher">
                
                <input 
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    className="first-name"
                    id="fn"
                    // autoComplete="off"
                    value={first_name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    className=""
                    id="ln"
                    // autoComplete="off"
                    value={last_name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className=""
                    id="em"
                    // autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Address"
                    name="address"
                    className=""
                    id="ad"
                    // autoComplete="off"
                    value={address}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="City"
                    name="city"
                    className=""
                    id="cit"
                    // autoComplete="off"
                    value={city}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    className=""
                    id="ag"
                    // autoComplete="off"
                    value={age}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    className=""
                    id="ph"
                    // autoComplete="off"
                    value={phone}
                    onChange={handleInputChange}
                />
                <div class="degree-and-picture">
                <select id='academic_dg' name='academic_dg' onChange={handleInputChange} class="selector">
                    <option value="Professional"> Professional </option>
                    <option value="Master"> Master </option>
                    <option value="PhD"> PhD </option>
                </select>

                <input 
                    onChange={handleInputChangeImg}
                    id='picture'
                    type="file"
                    name="picture"
                    className="photo"
                />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Update
                </button>
            </form>
                <div id="teacher_edited" className="text-response"></div>
    </div>
  )
}

export default EditTeacher;