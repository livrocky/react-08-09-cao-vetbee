import css from './AddMedsForm.module.css';
import Button from '../../UI/Button';

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
          <Button main>BACK</Button>
        </div>
      </form>
    </div>
  );
};

export default AddMedsForm;
