// import Button from '../../UI/Button';
import css from './MedCard.module.css';

const MedCard = (props) => {
  return (
    <div className={css.MedCard}>
      <h3>{props.id}</h3>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div className={css.buttons}>
        {/* <Button onClick={() => props.onDelete(props.id)} main>
          DELETE
        </Button> */}
      </div>
    </div>
  );
};

export default MedCard;
