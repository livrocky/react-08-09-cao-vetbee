import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css.PetCard}>
      <h3>{props.name}</h3>
      <p>{new Date(props.dob).toLocaleString('lt-LT').split(' ')[0]}</p>
      <p>{props.client_email}</p>
      <div className={css.buttons}>
        <Link to={`/ViewLogs/${props.id}`}>
          <Button secondary>VIEW LOG</Button>
        </Link>

        <Button onClick={() => props.onDelete(props.id)} main>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
