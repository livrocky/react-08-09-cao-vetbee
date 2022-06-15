import css from './AddMedsForm.module.css';

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
        <input type='text' name='dob' placeholder='Date Of Birth' />
        <label htmlFor='email'>Enter Email Address</label>
        <input type='text' name='email' placeholder='Email Address' />
        <div className='addButtons'>
          <button className={css.addPet}>ADD PET</button>
          <button className={css.backBtn}>BACK</button>
        </div>
      </form>
    </div>
  );
};

export default AddPetForm;
