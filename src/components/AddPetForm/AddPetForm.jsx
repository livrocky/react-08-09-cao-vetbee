import Button from '../../UI/Button';
import css from './AddPetForm.module.css';

const AddPetForm = () => {
  return (
    <div className={css.formDisplay}>
      <h1 className={css.addPetsTitle}>Add Pets Page</h1>
      <form className={css.AddPetForm}>
        {/* <label htmlFor='id'>Enter ID</label>
        <input type='text' name='id' /> */}
        <label htmlFor='name'>Enter Name</label>
        <input type='text' name='name' placeholder='Name' />
        <label htmlFor='dob'>Enter Date of Birth</label>
        <input type='date' name='dob' placeholder='Date Of Birth' />
        <label htmlFor='email'>Enter Email Address</label>
        <input type='text' name='email' placeholder='Email Address' />
        <div className='addButtons'>
          <Button secondary>ADD PET</Button>
          <Button main>BACK</Button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
