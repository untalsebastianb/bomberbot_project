import React, { useState } from 'react';
import '../assets/styles/components/SchoolProfile.scss'
import '../assets/styles/components/CreateTeacher.scss'
import Typography from '@material-ui/core/Typography';
import { useForm } from '../hooks/useForm';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { Alert } from '@material-ui/lab';

/**
 * Component for School profile view.
 * 
 * @component
 * return (
 *  <div className='create-teacher' />
 * )
 */
 

const CreateTeacher = (props) => {

    /**
    * return cookieValue
    * @param   {string} name name of cookie
    * @return  {string}  return value cookie
    */
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

    // Hook useForm: get all data from Inputs.
    const [{ first_name, last_name, email, address, city, age, phone, academic_dg, picture }, handleInputChange, handleInputChangeImg] = useForm({
        academic_dg: 'A'
    })

    /**
    * Send a request with post method
    *
    */
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
            .then((response) => {
                if (!response.ok) throw new Error(response.status);
                else return response.json();
            })

            .then(() => {
                document.getElementById('teacher_created').style.display = "block";
                document.getElementById('teacher_error').style.display = "none";
                setTimeout(function () { document.getElementById('teacher_created').style.display = "none"; }, 2000);
            })
            .catch(() => {
                document.getElementById('teacher_error').style.display = "block";
                document.getElementById('teacher_created').style.display = "none";
                setTimeout(function () { document.getElementById('teacher_error').style.display = "none"; }, 2000);
            });

    }


    return (
        <div class="create-teacher">
            <Typography variant='h2'>
                Create Teacher
      </Typography>
            <hr className="Title" />

            <form onSubmit={handleRegister} encType="multipart/form-data" class="form-teacher">

                <div class="row">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="first_name"

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
                        className=""
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
                        className=""
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
                        className=""
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
                        className=""
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
                        className=""
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
                        className=""
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
                            <Button variant="contained" border={1} component="span" size="medium" style={{ backgroundColor: "#3069f4", color: "white", width: 150, height: 40 }}>
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
                        <Button variant="contained" border={1} component="span" size="medium" style={{ backgroundColor: "#3069f4", color: "white", width: 150, height: 40 }}>
                            <Typography variant='h5'>
                                Register
                            </Typography>

                        </Button>
                    </label>

                </div>




            </form>
            <div id="teacher_created" class="response-create">
                <Alert style={{ fontSize: 15 }} onClose={() => { document.getElementById('teacher_created').style.display = "none"; }}>Teacher Created!</Alert>
            </div>
            <div id="teacher_error" class="response-create">
                <Alert severity="error" style={{ fontSize: 15 }} onClose={() => { document.getElementById('teacher_error').style.display = "none"; }}> The Teacher was not created, check that the fields are not empty</Alert>
            </div>
        </div>
    )
}

export default CreateTeacher;