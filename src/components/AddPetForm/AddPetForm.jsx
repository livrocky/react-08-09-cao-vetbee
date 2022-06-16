import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './AddPetForm.module.css';

const AddPetForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [dobValue, setDobValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }

  function dobEnterHandler(event) {
    setDobValue(event.target.value);
  }

  function emailEnterHandler(event) {
    setEmailValue(event.target.value);
  }

  return (
    <div className={css.formDisplay}>
      <h1 className={css.addPetsTitle}>Add Pets Page</h1>
      <form onSubmit={sendValues} className={css.AddPetForm}>
        {/* <label htmlFor='id'>Enter ID</label>
        <input type='text' name='id' /> */}
        <label htmlFor='name'>Enter Name</label>
        <input onChange={nameEnterHandler} value={nameValue} type='text' id='name' placeholder='Name' />
        <label htmlFor='dob'>Enter Date of Birth</label>
        <input onChange={dobEnterHandler} value={dobValue} type='date' id='dob' placeholder='Date Of Birth' />
        <label htmlFor='email'>Enter Email Address</label>
        <input onChange={emailEnterHandler} value={emailValue} type='email' id='email' placeholder='Email Address' />
        <div className='addButtons'>
          <Button secondary>ADD PET</Button>
          <Link to='/'>
            <Button main>BACK</Button>
          </Link>
        </div>
      </form>
    </div>
  );

  function sendValues(event) {
    event.preventDefault();

    if (nameValue === '') return;
    const petObj = {
      name: nameValue,
      dob: dobValue,
      client_email: emailValue,
    };
    async function postPets() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(petObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs ===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/';
      } else {
        console.error('Error in adding a pet');
      }
    }
    postPets();

    console.log('petObj ===', petObj);
    // clear inputs
    setNameValue('');
    setDobValue('');
    setEmailValue('');
  }
};
export default AddPetForm;
