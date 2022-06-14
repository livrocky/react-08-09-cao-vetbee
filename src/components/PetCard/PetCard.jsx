const PetCard = (props) => {
  return (
    <div className='petCard'>
      <h3>{props.name}</h3>
      <p>{props.dob}</p>
      <p>{props.client_email}</p>
      <div className='buttons'>
        <button>VIEW LOG</button>
        <button>DELETE</button>
      </div>
    </div>
  );
};

export default PetCard;
