import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css.PetCard}>
      <h3>{props.name}</h3>
      <p>{props.dob}</p>
      <p>{props.client_email}</p>
      <div className={css.buttons}>
        <button className={css.logBtn}>VIEW LOG</button>
        <button className={css.deleteBtn}>DELETE</button>
      </div>
    </div>
  );
};

export default PetCard;
