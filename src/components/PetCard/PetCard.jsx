import DelBtn from '../Buttons/DelBtn';
import LogBtn from '../Buttons/LogBtn';
import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css.PetCard}>
      <h3>{props.name}</h3>
      <p>{new Date(props.dob).toLocaleString().split(',')[0]}</p>
      <p>{props.client_email}</p>
      <div className={css.buttons}>
        <LogBtn />
        <DelBtn />
      </div>
    </div>
  );
};

export default PetCard;
