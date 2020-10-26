import React, { useState } from 'react'
import DescriptionSchool from '../components/DescriptionSchool'
import InfoSchool from '../components/InfoSchool'
import '../assets/styles/components/SchoolProfile.scss'
import '../assets/styles/components/CreateTeacher.scss'
import Typography from '@material-ui/core/Typography';
import useInitialState from '../hooks/schoolInformation.js';
import { useForm } from '../hooks/useForm';
 

// containaer for School profile view
const CreateTeacher = ( props ) => {
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



const school_id = props.match.params.id
const [{first_name, last_name, email, address, city, age, phone, academic_dg, picture}, handleInputChange, handleInputChangeImg] = useForm({
    // first_name: 'Emilio2',
    // last_name: 'Facundo',
    // email: 'emi2@gmail.com',
    // address: 'calle 8 # 11-13',
    // age: '22',
    // phone: '443432564',
    academic_dg: 'A'
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
    data.append('school_id', school_id)
    data.append('picture', picture)

    fetch(`http://127.0.0.1:8000/api/teacher/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken
        },
        body: data
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

}

  return (
    <div class="create-teacher">
      <Typography variant='h2'>
        Create Teacher
      </Typography>
      <hr className="Title"/>

      <form onSubmit={handleRegister} encType="multipart/form-data" class="form-teacher">
                
                <input 
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    className="first-name"
                    // autoComplete="off"
                    value={first_name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    className=""
                    // autoComplete="off"
                    value={last_name}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className=""
                    // autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Address"
                    name="address"
                    className=""
                    // autoComplete="off"
                    value={address}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="City"
                    name="city"
                    className=""
                    // autoComplete="off"
                    value={city}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    className=""
                    // autoComplete="off"
                    value={age}
                    onChange={handleInputChange}
                />

                <input 
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    className=""
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
                    Register
                </button>
            </form>
    </div>
  )
}

export default CreateTeacher;