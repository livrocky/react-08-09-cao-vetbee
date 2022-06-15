import Button from '../../UI/Button';
import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css.PetCard}>
      <h3>{props.name}</h3>
      <p>{new Date(props.dob).toLocaleString('lt-LT').split(' ')[0]}</p>
      <p>{props.client_email}</p>
      <div className={css.buttons}>
        <Button secondary>VIEW LOG</Button>
        <Button main>DELETE</Button>
      </div>
    </div>
  );
};

export default PetCard;
