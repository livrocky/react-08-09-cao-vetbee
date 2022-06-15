import css from './AddMedsForm.module.css';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const AddMedsForm = () => {
  return (
    <div className={css.formDisplay}>
      <h1 className={css.addMedsTitle}>Add Meds Page</h1>
      <form className={css.AddMedsForm}>
        <label htmlFor='name'>Enter Medication</label>
        <input type='text' name='name' placeholder='Name' />
        <label htmlFor='description'>Enter Description Here</label>
        <input type='text' name='description' placeholder='Description' />
        <div className='addButtons'>
          <Button secondary>ADD MED</Button>
          <Link to='/'>
            <Button main>BACK</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddMedsForm;
