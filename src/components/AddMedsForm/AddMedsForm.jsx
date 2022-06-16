import css from './AddMedsForm.module.css';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AddMedsForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  function nameEnterHandler(event) {
    setNameValue(event.target.value);
  }
  function descriptionEnterHandler(event) {
    setDescriptionValue(event.target.value);
  }

  return (
    <div className={css.formDisplay}>
      <h1 className={css.addMedsTitle}>Add Meds Page</h1>
      <form onSubmit={sendValues} className={css.AddMedsForm}>
        <label htmlFor='name'>Enter Medication</label>
        <input onChange={nameEnterHandler} type='text' name='name' placeholder='Name' />
        <label htmlFor='description'>Enter Description Here</label>
        <input onChange={descriptionEnterHandler} type='text' name='description' placeholder='Description' />
        <div className='addButtons'>
          <Button secondary>ADD MED</Button>
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
    const medObj = {
      name: nameValue,
      description: descriptionValue,
    };
    async function postMeds() {
      const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medObj),
      });
      const dataInJs = await resp.json();
      console.log('dataInJs===', dataInJs);
      if (dataInJs.changes === 1) {
        window.location.href = '/medications';
      } else {
        console.error('Error in adding a pet');
      }
    }
    postMeds();

    console.log('medObj===', medObj);
    setNameValue('');
    setDescriptionValue('');
  }
};

export default AddMedsForm;
